import { about, identity, manifesto, stats } from "../data/content";

export default function Finder() {
  const initials = identity.name.split(" ").map((p) => p[0]).join("");
  return (
    <div className="afi">
      <div className="sd">
        <div className="gp">Profile</div>
        <div className="it on">
          <span className="d" style={{ background: "linear-gradient(135deg,var(--acc),var(--acc3))" }} />
          about.txt
        </div>
        <div className="it">
          <span className="d" style={{ background: "var(--acc2)" }} />
          manifesto.md
        </div>
        <div className="it">
          <span className="d" style={{ background: "var(--ylw)" }} />
          numbers.csv
        </div>
      </div>
      <div className="mn">
        <div className="hr">
          <div className="av">{initials}</div>
          <div>
            <h1>{identity.name}</h1>
            <div className="role">{identity.role}</div>
            <div className="meta">
              <span>● {identity.current}</span>
              <span>📍 {identity.location}</span>
              <span>⏱ {identity.tz}</span>
            </div>
          </div>
        </div>

        <div className="sec">
          <h2>// about</h2>
          <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-d)" }}>
            {about.text}
          </div>
        </div>

        <div className="sec">
          <h2>// manifesto</h2>
          {manifesto.map((b, i) => (
            <div key={i} className="bel">
              <span className="k">{b.k}</span>
              {b.v}
            </div>
          ))}
        </div>

        <div className="sec">
          <h2>// numbers</h2>
          <div className="st">
            {stats.map((s, i) => (
              <div key={i} className="s">
                <div className="n">{s.n}</div>
                <div className="l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
