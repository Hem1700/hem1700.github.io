import { useCallback, useEffect, useRef, useState } from "react";
import Topbar from "./Topbar";
import Dock from "./Dock";
import Window from "./Window";
import Spotlight from "./Spotlight";
import PostViewer from "./PostViewer";
import { useDesktop } from "../hooks/useDesktop";
import Readme from "../apps/Readme";
import Finder from "../apps/Finder";
import Notes from "../apps/Notes";
import Files from "../apps/Files";
import Terminal from "../apps/Terminal";
import Timeline from "../apps/Timeline";
import Mail from "../apps/Mail";
import System from "../apps/System";
import Games from "../apps/Games";

function AppHost({ app, win, desktop }) {
  const appState = win.appState || {};
  switch (app) {
    case "readme":
      return <Readme onLaunch={desktop.launch} />;
    case "finder":
      return <Finder />;
    case "notes":
      return (
        <Notes
          initialSlug={appState.selectedSlug}
          onOpenPost={desktop.openPost}
        />
      );
    case "files":
      return <Files initialTitle={appState.selectedTitle} />;
    case "terminal":
      return (
        <Terminal
          runOnOpen={appState.runOnOpen}
          runOnOpenNonce={appState.runOnOpenNonce}
          onLaunch={desktop.launch}
        />
      );
    case "timeline":
      return <Timeline />;
    case "mail":
      return <Mail />;
    case "system":
      return <System />;
    case "games":
      return <Games initialGame={appState.initialGame} />;
    default:
      return null;
  }
}

export default function Desktop({ autoOpen, autoOpenSlug, freshBoot }) {
  const desktop = useDesktop();
  const [postSlug, setPostSlug] = useState(autoOpenSlug || null);

  // Auto-open behavior on mount based on the route.
  useEffect(() => {
    if (autoOpenSlug) {
      // Open Notes underneath so closing PostViewer reveals it.
      desktop.launch("notes", { selectedSlug: autoOpenSlug });
      setPostSlug(autoOpenSlug);
      return;
    }
    if (autoOpen) {
      desktop.launch(autoOpen);
      return;
    }
    if (freshBoot) {
      desktop.launch("readme");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ⌘K / Ctrl+K spotlight + global escape.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        desktop.toggleSpotlight();
      } else if (e.key === "Escape") {
        desktop.closeSpotlight();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [desktop]);

  const windowsRef = useRef(desktop.windows);
  useEffect(() => {
    windowsRef.current = desktop.windows;
  }, [desktop.windows]);

  // Terminal "exit" command dispatches a custom event we listen for here.
  useEffect(() => {
    const onCloseTerm = () => {
      windowsRef.current
        .filter((w) => w.app === "terminal")
        .forEach((w) => desktop.close(w.id));
    };
    window.addEventListener("hemos-close-term", onCloseTerm);
    return () => window.removeEventListener("hemos-close-term", onCloseTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activeApp = desktop.windows.find((w) => w.id === desktop.focusId)?.app;
  const openApps = [...new Set(desktop.windows.map((w) => w.app))];

  const openPost = useCallback((slug) => {
    desktop.launch("notes", { selectedSlug: slug });
    setPostSlug(slug);
  }, [desktop.launch]);

  const runCveCommand = useCallback((id) => {
    desktop.launch("terminal", { runOnOpen: `cat cve ${id}`, runOnOpenNonce: Date.now() });
  }, [desktop.launch]);

  const topbarActions = {
    launch: desktop.launch,
    closeActive: () => { if (desktop.focusId != null) desktop.close(desktop.focusId); },
    minimizeAll: () => desktop.windows.forEach((w) => { if (!w.minimized) desktop.minimize(w.id); }),
    closeAll: () => desktop.windows.forEach((w) => desktop.close(w.id)),
    hasFocus: desktop.focusId != null,
    hasOpen: desktop.windows.length > 0,
  };

  const visibleWindows = desktop.windows.filter((w) => !w.minimized);
  const showWelcome = visibleWindows.length === 0 && !postSlug;

  return (
    <div className="desktop">
      <Topbar activeApp={activeApp} onSpotlight={desktop.toggleSpotlight} actions={topbarActions} />
      <div className="dmark">{` ▒ HEM-OS 1.7.0
  curiosity-d ✓
  43 pentests
  18 posts
  12 certs
  1  patent
  ∞  questions`}</div>

      {showWelcome && (
        <div className="desktop-welcome">
          <Readme onLaunch={desktop.launch} />
        </div>
      )}

      {desktop.windows.map((w) => (
        <Window
          key={w.id}
          win={w}
          focused={w.id === desktop.focusId}
          onClose={desktop.close}
          onMinimize={desktop.minimize}
          onToggleMaximize={desktop.toggleMaximize}
          onFocus={desktop.focus}
          onMove={desktop.move}
          onResize={desktop.resize}
        >
          <AppHost app={w.app} win={w} desktop={{ ...desktop, openPost }} />
        </Window>
      ))}

      <Dock onLaunch={desktop.launch} openApps={openApps} />

      {desktop.spotlightOpen && (
        <div
          onClick={desktop.closeSpotlight}
          style={{ position: "fixed", inset: 0, zIndex: 70, background: "rgba(0,0,0,0.3)" }}
        >
          <Spotlight
            onClose={desktop.closeSpotlight}
            onLaunch={desktop.launch}
            onOpenPost={openPost}
            onRunCveCommand={runCveCommand}
          />
        </div>
      )}

      {postSlug && (
        <PostViewer slug={postSlug} onClose={() => setPostSlug(null)} />
      )}
    </div>
  );
}
