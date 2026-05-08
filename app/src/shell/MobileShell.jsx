import { useEffect, useMemo, useState } from "react";
import { APPS, ALL_APPS } from "../data/apps";
import Readme from "../apps/Readme";
import Finder from "../apps/Finder";
import Notes from "../apps/Notes";
import Files from "../apps/Files";
import Terminal from "../apps/Terminal";
import Timeline from "../apps/Timeline";
import Mail from "../apps/Mail";
import System from "../apps/System";
import Games from "../apps/Games";
import ExploitLab from "../apps/ExploitLab";
import AttackRange from "../apps/AttackRange";
import PostViewer from "./PostViewer";
import Spotlight from "./Spotlight";

function renderApp(app, args) {
  const a = args || {};
  switch (app) {
    case "readme":   return <Readme onLaunch={a.onLaunch} />;
    case "finder":   return <Finder />;
    case "notes":    return <Notes initialSlug={a.selectedSlug} onOpenPost={a.onOpenPost} />;
    case "files":    return <Files initialTitle={a.selectedTitle} />;
    case "terminal": return <Terminal runOnOpen={a.runOnOpen} runOnOpenNonce={a.runOnOpenNonce} onLaunch={a.onLaunch} />;
    case "timeline": return <Timeline />;
    case "mail":     return <Mail />;
    case "system":   return <System />;
    case "games":      return <Games initialGame={a.initialGame} />;
    case "exploitlab":   return <ExploitLab />;
    case "attackrange":  return <AttackRange />;
    default:             return null;
  }
}

export default function MobileShell({ autoOpen, autoOpenSlug }) {
  const [activeApp, setActiveApp] = useState(autoOpen || "readme");
  const [appArgs, setAppArgs] = useState({});
  const [postSlug, setPostSlug] = useState(autoOpenSlug || null);
  const [spotlightOpen, setSpotlightOpen] = useState(false);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(t);
  }, []);

  // If we deep-linked to a post, also seed Notes with the right slug so
  // closing PostViewer reveals the matching list selection.
  useEffect(() => {
    if (autoOpenSlug) {
      setActiveApp("notes");
      setAppArgs({ selectedSlug: autoOpenSlug });
    } else if (autoOpen) {
      setActiveApp(autoOpen);
    }
  }, [autoOpen, autoOpenSlug]);

  const launch = (app, state) => {
    setActiveApp(app);
    setAppArgs(state || {});
  };
  const openPost = (slug) => setPostSlug(slug);
  const runCveCommand = (id) => {
    setActiveApp("terminal");
    setAppArgs({ runOnOpen: `cat cve ${id}`, runOnOpenNonce: Date.now() });
  };

  const args = useMemo(
    () => ({ ...appArgs, onLaunch: launch, onOpenPost: openPost }),
    [appArgs]
  );

  return (
    <div className="mshell">
      <div className="mtop">
        <span className="brand">⌘ HEM-OS</span>
        <span>{APPS[activeApp]?.title || "Desktop"}</span>
        <span className="clk">
          {now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </span>
        <span className="sp-icon" onClick={() => setSpotlightOpen(true)}>⌕</span>
      </div>

      <div className="mbody">{renderApp(activeApp, args)}</div>

      <div className="mtabs">
        {ALL_APPS.map((id) => {
          const meta = APPS[id];
          const initial = meta.title.split(" ")[0][0];
          const label = meta.title.split("—")[0].trim();
          return (
            <div
              key={id}
              className={`mt ${activeApp === id ? "on" : ""}`}
              onClick={() => { setActiveApp(id); setAppArgs({}); }}
            >
              <div className={`mtg ${meta.g}`}>{initial}</div>
              <div className="mtl">{label}</div>
            </div>
          );
        })}
      </div>

      {postSlug && <PostViewer slug={postSlug} onClose={() => setPostSlug(null)} />}

      {spotlightOpen && (
        <div
          onClick={() => setSpotlightOpen(false)}
          style={{ position: "fixed", inset: 0, zIndex: 80, background: "rgba(0,0,0,0.4)" }}
        >
          <Spotlight
            onClose={() => setSpotlightOpen(false)}
            onLaunch={launch}
            onOpenPost={openPost}
            onRunCveCommand={runCveCommand}
          />
        </div>
      )}
    </div>
  );
}
