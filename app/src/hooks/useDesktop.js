import { useCallback, useRef, useState } from "react";
import { APPS } from "../data/apps";

// Window manager state hook. Owns the array of open windows, focus, z-order,
// and spotlight visibility. Apps don't talk to this hook directly — Desktop
// passes callbacks down.
export function useDesktop() {
  const [windows, setWindows] = useState([]);
  const [focusId, setFocusId] = useState(null);
  const [spotlightOpen, setSpotlightOpen] = useState(false);
  const widRef = useRef(0);
  const zRef = useRef(1);

  const launch = useCallback((app, appState) => {
    setWindows((ws) => {
      const existing = ws.find((w) => w.app === app);
      if (existing) {
        zRef.current += 1;
        const z = zRef.current;
        setFocusId(existing.id);
        return ws.map((w) =>
          w.id === existing.id
            ? { ...w, minimized: false, z, appState: appState ?? w.appState }
            : w
        );
      }
      const meta = APPS[app];
      if (!meta) return ws;
      widRef.current += 1;
      zRef.current += 1;
      const id = widRef.current;
      // Center window in the available area (between topbar and dock)
      // then cascade by 32px per open window, wrapping every 8.
      const TOPBAR = 30, DOCK = 80;
      const vw = typeof window !== "undefined" ? window.innerWidth : 1200;
      const vh = typeof window !== "undefined" ? window.innerHeight : 800;
      const openCount = ws.filter((w) => !w.minimized).length % 8;
      const cascade = openCount * 32;
      const cx = Math.max(60, Math.round((vw - meta.w) / 2) - 80 + cascade);
      const cy = Math.max(TOPBAR + 10, Math.round((vh - TOPBAR - DOCK - meta.h) / 2) + TOPBAR + cascade);
      setFocusId(id);
      return [
        ...ws,
        {
          id,
          app,
          x: Math.min(cx, vw - meta.w - 20),
          y: Math.min(cy, vh - DOCK - meta.h - 10),
          w: meta.w,
          h: meta.h,
          minimized: false,
          maximized: false,
          z: zRef.current,
          appState: appState ?? null,
        },
      ];
    });
  }, []);

  const close = useCallback((id) => {
    setWindows((ws) => ws.filter((w) => w.id !== id));
    setFocusId((cur) => (cur === id ? null : cur));
  }, []);

  const minimize = useCallback((id) => {
    setWindows((ws) => ws.map((w) => (w.id === id ? { ...w, minimized: true } : w)));
  }, []);

  const toggleMaximize = useCallback((id) => {
    setWindows((ws) =>
      ws.map((w) => (w.id === id ? { ...w, maximized: !w.maximized } : w))
    );
  }, []);

  const focus = useCallback((id) => {
    zRef.current += 1;
    const z = zRef.current;
    setFocusId(id);
    setWindows((ws) =>
      ws.map((w) => (w.id === id ? { ...w, z, minimized: false } : w))
    );
  }, []);

  const move = useCallback((id, x, y) => {
    setWindows((ws) => ws.map((w) => (w.id === id ? { ...w, x, y } : w)));
  }, []);

  const resize = useCallback((id, w, h) => {
    setWindows((ws) => ws.map((win) => (win.id === id ? { ...win, w, h } : win)));
  }, []);

  const updateAppState = useCallback((id, partial) => {
    setWindows((ws) =>
      ws.map((w) =>
        w.id === id ? { ...w, appState: { ...(w.appState || {}), ...partial } } : w
      )
    );
  }, []);

  const toggleSpotlight = useCallback(() => setSpotlightOpen((s) => !s), []);
  const closeSpotlight = useCallback(() => setSpotlightOpen(false), []);

  return {
    windows,
    focusId,
    spotlightOpen,
    launch,
    close,
    minimize,
    toggleMaximize,
    focus,
    move,
    resize,
    updateAppState,
    toggleSpotlight,
    closeSpotlight,
  };
}
