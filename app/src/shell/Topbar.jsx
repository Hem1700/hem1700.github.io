import { useEffect, useRef, useState } from "react";
import { APPS } from "../data/apps";

const BOOT_FLAG = "hemos:bootSeen";

export default function Topbar({ activeApp, onSpotlight, actions }) {
  const [now, setNow] = useState(new Date());
  const [openMenu, setOpenMenu] = useState(null); // 'file' | 'edit' | 'view' | null
  const menuRef = useRef(null);

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(t);
  }, []);

  // Close menu on outside click or Escape.
  useEffect(() => {
    if (!openMenu) return undefined;
    const onDown = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpenMenu(null);
    };
    const onKey = (e) => { if (e.key === "Escape") setOpenMenu(null); };
    window.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [openMenu]);

  const click = (id) => () => setOpenMenu((cur) => (cur === id ? null : id));
  const fire = (fn) => () => { setOpenMenu(null); if (fn) fn(); };

  const replayBoot = () => {
    try { localStorage.removeItem(BOOT_FLAG); } catch (_) {}
    window.location.assign("/?boot=1");
  };

  const menus = {
    file: [
      { label: "New Terminal", hint: "term", run: () => actions?.launch?.("terminal") },
      { label: "New Notes window", hint: "notes", run: () => actions?.launch?.("notes") },
      { label: "Spotlight…", hint: "⌘K", run: onSpotlight },
      { sep: true },
      { label: "Replay Boot", hint: "?boot=1", run: replayBoot },
      { label: "Close Active Window", hint: "✕", run: actions?.closeActive, disabled: !actions?.hasFocus },
    ],
    edit: [
      { label: "Search…", hint: "⌘K", run: onSpotlight },
      { label: "Copy Email", run: () => navigator.clipboard?.writeText("hemparekhportfolio@gmail.com") },
      { label: "Copy Site URL", run: () => navigator.clipboard?.writeText(window.location.href) },
    ],
    view: [
      { label: "About HEM-OS", run: () => actions?.launch?.("readme") },
      { label: "Show System Monitor", run: () => actions?.launch?.("system") },
      { sep: true },
      { label: "Minimize All Windows", run: actions?.minimizeAll, disabled: !actions?.hasOpen },
      { label: "Close All Windows", run: actions?.closeAll, disabled: !actions?.hasOpen },
    ],
  };

  return (
    <div className="tb" ref={menuRef}>
      <span className="it brand">⌘ HEM-OS</span>
      <span className="it">{(activeApp && APPS[activeApp]?.title) || "Desktop"}</span>
      {["file", "edit", "view"].map((id) => (
        <span
          key={id}
          className={`it tb-menu ${openMenu === id ? "open" : ""}`}
          onClick={click(id)}
        >
          {id[0].toUpperCase() + id.slice(1)}
          {openMenu === id && (
            <div className="tb-menu-pop" onClick={(e) => e.stopPropagation()}>
              {menus[id].map((item, i) =>
                item.sep ? (
                  <div key={i} className="tb-menu-sep" />
                ) : (
                  <button
                    key={i}
                    type="button"
                    className="tb-menu-item"
                    disabled={item.disabled}
                    onClick={fire(item.run)}
                  >
                    <span>{item.label}</span>
                    {item.hint && <span className="tb-menu-hint">{item.hint}</span>}
                  </button>
                )
              )}
            </div>
          )}
        </span>
      ))}
      <div className="r">
        <span><span className="dot" />online</span>
        <span style={{ cursor: "pointer" }} onClick={onSpotlight}>⌘K spotlight</span>
        <span style={{ color: "var(--ink)" }}>
          {now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </span>
      </div>
    </div>
  );
}
