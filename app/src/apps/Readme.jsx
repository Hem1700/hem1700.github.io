import { APPS, DOCK_ORDER } from "../data/apps";

// Show first 6 dock apps in the Readme welcome tiles.
const QUICK = DOCK_ORDER.slice(0, 6);

export default function Readme({ onLaunch }) {
  return (
    <div className="ar">
      <h1>Welcome to HEM-OS.</h1>
      <div className="sb">// boot complete · all subsystems online</div>
      <p>
        This is Hem Parekh's portfolio, but installed as an operating system.
        Every section lives in an app. Open the dock, double-click, drag windows,
        type commands.
      </p>
      <div className="tp">
        Press <kbd>⌘K</kbd> (or <kbd>Ctrl+K</kbd>) for spotlight — search across
        apps, posts, projects, and CVEs.
      </div>
      <p>Quick launch:</p>
      <div className="ql">
        {QUICK.map((id) => {
          const meta = APPS[id];
          const label = meta.title.split("—")[0].trim();
          const subtitle = (meta.title.split("—")[1] || "").trim();
          return (
            <div key={id} className="q" onClick={() => onLaunch(id)}>
              <div className={`mi ${meta.g}`} />
              <div>
                <div style={{ fontWeight: 600 }}>{label}</div>
                <div style={{ fontSize: 11, color: "var(--mut)", fontFamily: "var(--mono)" }}>
                  {subtitle}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <p style={{ color: "var(--mut)", fontSize: 12, fontFamily: "var(--mono)", marginTop: 24 }}>
        // Try the Terminal: type{" "}
        <span style={{ color: "var(--acc2)" }}>cves</span>,{" "}
        <span style={{ color: "var(--acc2)" }}>cat .now</span>, or{" "}
        <span style={{ color: "var(--acc2)" }}>fortune</span>.
      </p>
    </div>
  );
}
