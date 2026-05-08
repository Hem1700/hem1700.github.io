import { useEffect, useState } from "react";
import { APPS } from "../data/apps";

const GENIE_MS = 420;
const MIN_W = 360;
const MIN_H = 220;
const TOPBAR_H = 30;

// Resolve the dock icon's center (or a fallback bottom-center point) for the
// genie animation target. Returns the delta from the window's center to the
// dock icon's center.
function getGenieTarget(app, win) {
  const winCenterX = win.x + win.w / 2;
  const winCenterY = win.y + win.h / 2;
  const fallback = { tx: 0, ty: window.innerHeight - winCenterY };
  if (typeof document === "undefined") return fallback;
  const dockIcon = document.querySelector(`.dk .ic[data-app="${app}"]`);
  if (!dockIcon) return fallback;
  const r = dockIcon.getBoundingClientRect();
  return {
    tx: r.left + r.width / 2 - winCenterX,
    ty: r.top + r.height / 2 - winCenterY,
  };
}

// Generic draggable / resizable window with Linux-style window controls.
// Window position and size live in the shell-level useDesktop state; this
// component handles pointer events and reports back via callbacks.
//
// Local phase state drives the macOS-genie minimize/restore animation:
//   visible -> minimizing -> minimized -> restoring -> visible
// While a window is in `minimizing`/`restoring`, it stays in the DOM with a
// CSS animation; only `minimized` applies display: none.
export default function Window({
  win,
  focused,
  onClose,
  onMinimize,
  onToggleMaximize,
  onFocus,
  onMove,
  onResize,
  children,
}) {
  const [drag, setDrag] = useState(null);
  const [rsz, setRsz] = useState(null);
  // Start in "visible"; opening animation is kicked off in the mount effect
  // below so getGenieTarget can read the freshly-rendered dock icon.
  const [phase, setPhase] = useState(win.minimized ? "minimized" : "visible");
  const [target, setTarget] = useState(null);

  // On first mount, if the window is opening fresh (not minimized), play the
  // genie-in animation from the dock icon. Empty deps = mount only.
  useEffect(() => {
    if (!win.minimized) {
      setTarget(getGenieTarget(win.app, win));
      setPhase("opening");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!drag && !rsz) return undefined;
    const move = (e) => {
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const y = e.touches ? e.touches[0].clientY : e.clientY;
      if (drag) {
        onMove(
          win.id,
          Math.max(0, drag.wx + (x - drag.x)),
          Math.max(TOPBAR_H, drag.wy + (y - drag.y))
        );
      } else if (rsz) {
        // 8-direction resize. rsz.dir is one of n/s/e/w/ne/nw/se/sw.
        const dx = x - rsz.x;
        const dy = y - rsz.y;
        let nx = rsz.wx;
        let ny = rsz.wy;
        let nw = rsz.ww;
        let nh = rsz.wh;
        if (rsz.dir.includes("e")) {
          nw = Math.max(MIN_W, rsz.ww + dx);
        }
        if (rsz.dir.includes("w")) {
          nw = Math.max(MIN_W, rsz.ww - dx);
          nx = Math.max(0, rsz.wx + (rsz.ww - nw));
        }
        if (rsz.dir.includes("s")) {
          nh = Math.max(MIN_H, rsz.wh + dy);
        }
        if (rsz.dir.includes("n")) {
          nh = Math.max(MIN_H, rsz.wh - dy);
          ny = Math.max(TOPBAR_H, rsz.wy + (rsz.wh - nh));
        }
        if (nx !== rsz.wx || ny !== rsz.wy) onMove(win.id, nx, ny);
        if (nw !== rsz.ww || nh !== rsz.wh) onResize(win.id, nw, nh);
      }
    };
    const up = () => {
      setDrag(null);
      setRsz(null);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchmove", move);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", up);
    };
  }, [drag, rsz, win.id, onMove, onResize]);

  // Genie state machine — split into two effects so the auto-advance timeout
  // is not torn down when the phase prop in deps changes.
  // (1) When the win.minimized prop flips, kick off a transition.
  useEffect(() => {
    if (win.minimized && phase === "visible") {
      setTarget(getGenieTarget(win.app, win));
      setPhase("minimizing");
    } else if (!win.minimized && phase === "minimized") {
      setTarget(getGenieTarget(win.app, win));
      setPhase("restoring");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [win.minimized]);

  // (2) Auto-advance after the animation duration. Cleanup only runs when
  // we leave a transient phase, so the timer is never killed mid-cycle.
  useEffect(() => {
    if (phase === "minimizing") {
      const t = setTimeout(() => setPhase("minimized"), GENIE_MS);
      return () => clearTimeout(t);
    }
    if (phase === "restoring" || phase === "opening") {
      const t = setTimeout(() => {
        setPhase("visible");
        setTarget(null);
      }, GENIE_MS);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [phase]);

  const startDrag = (e) => {
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    setDrag({ x, y, wx: win.x, wy: win.y });
    onFocus(win.id);
  };
  const startResize = (dir) => (e) => {
    e.stopPropagation();
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    setRsz({ x, y, ww: win.w, wh: win.h, wx: win.x, wy: win.y, dir });
    onFocus(win.id);
  };

  const style = {
    left: win.maximized ? 0 : win.x,
    top: win.maximized ? 30 : win.y,
    width: win.maximized ? "100vw" : win.w,
    height: win.maximized ? "calc(100vh - 30px - 80px)" : win.h,
    zIndex: 10 + (win.z || 0) + (focused ? 200 : 0),
  };
  if (target && (phase === "minimizing" || phase === "restoring" || phase === "opening")) {
    style["--genie-tx"] = `${target.tx}px`;
    style["--genie-ty"] = `${target.ty}px`;
  }

  const phaseClass =
    phase === "minimized" ? "mn" :
    phase === "minimizing" ? "minimizing" :
    phase === "restoring" ? "restoring" :
    phase === "opening" ? "opening" : "";

  return (
    <div
      className={`win ${focused ? "fc" : ""} ${phaseClass}`}
      style={style}
      onMouseDown={() => onFocus(win.id)}
    >
      <div
        className={`tt ${drag ? "gr" : ""}`}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
        onDoubleClick={() => onToggleMaximize(win.id)}
      >
        <div className="ti">{APPS[win.app].title}</div>
        <div className="tr">
          <button
            type="button"
            className="tl mi"
            title="Minimize"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); onMinimize(win.id); }}
          >
            <span aria-hidden="true">—</span>
            <span className="visually-hidden">Minimize</span>
          </button>
          <button
            type="button"
            className="tl mx"
            title={win.maximized ? "Restore" : "Maximize"}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); onToggleMaximize(win.id); }}
          >
            <span aria-hidden="true">{win.maximized ? "❐" : "□"}</span>
            <span className="visually-hidden">{win.maximized ? "Restore" : "Maximize"}</span>
          </button>
          <button
            type="button"
            className="tl cl"
            title="Close"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); onClose(win.id); }}
          >
            <span aria-hidden="true">×</span>
            <span className="visually-hidden">Close</span>
          </button>
        </div>
      </div>
      <div className="wb">{children}</div>
      {!win.maximized && (
        <>
          <div className="rs-edge rs-n"  onMouseDown={startResize("n")}  onTouchStart={startResize("n")} />
          <div className="rs-edge rs-s"  onMouseDown={startResize("s")}  onTouchStart={startResize("s")} />
          <div className="rs-edge rs-e"  onMouseDown={startResize("e")}  onTouchStart={startResize("e")} />
          <div className="rs-edge rs-w"  onMouseDown={startResize("w")}  onTouchStart={startResize("w")} />
          <div className="rs-corner rs-nw" onMouseDown={startResize("nw")} onTouchStart={startResize("nw")} />
          <div className="rs-corner rs-ne" onMouseDown={startResize("ne")} onTouchStart={startResize("ne")} />
          <div className="rs-corner rs-sw" onMouseDown={startResize("sw")} onTouchStart={startResize("sw")} />
          <div className="rs-corner rs-se" onMouseDown={startResize("se")} onTouchStart={startResize("se")} />
          <div className="rs" aria-hidden="true" />
        </>
      )}
    </div>
  );
}
