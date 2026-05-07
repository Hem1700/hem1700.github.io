import { useEffect, useState } from "react";
import { projects, projectMeta } from "../data/content";

function metaFor(p) {
  return projectMeta[p.title] || {
    code: p.title.split(" ").map((w) => w[0]).join("").slice(0, 4).toUpperCase(),
    status: "—",
    metric: "—",
    stack: p.tags || [],
  };
}

export default function Files({ initialTitle }) {
  const [openIdx, setOpenIdx] = useState(null);

  useEffect(() => {
    if (initialTitle) {
      const idx = projects.findIndex((p) => p.title === initialTitle);
      if (idx >= 0) setOpenIdx(idx);
    } else {
      setOpenIdx(null);
    }
  }, [initialTitle]);

  if (openIdx !== null) {
    const p = projects[openIdx];
    const m = metaFor(p);
    return (
      <div className="af">
        <div className="pdr">
          <button type="button" className="bk bk-button" onClick={() => setOpenIdx(null)}>← projects</button>
          <h2>{p.title}</h2>
          <div className="ct">{m.code} · {(p.tags || []).join(" / ")} · {m.status}</div>
          <p className="bl">{p.description}</p>
          <div className="sp">
            <div className="s"><div className="l">METRIC</div><div className="v">{m.metric}</div></div>
            <div className="s"><div className="l">STATUS</div><div className="v">{m.status}</div></div>
          </div>
          <div className="sk">{m.stack.map((s) => <span key={s} className="ch">{s}</span>)}</div>
          {p.href && p.href !== "#" && (
            <p style={{ marginTop: 18 }}>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                style={{ color: "var(--acc2)", fontFamily: "var(--mono)", fontSize: 12 }}
              >
                {p.href} →
              </a>
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="af">
      <div className="tb2">
        <div className="crm">/home/hem<span className="sp">›</span>projects</div>
      </div>
      <div className="grd">
        {projects.map((p, i) => {
          const m = metaFor(p);
          return (
            <div key={p.title} className="fi" onClick={() => setOpenIdx(i)}>
              <div className="ic">{p.title[0]}</div>
              <div className="ttl">{p.title}</div>
              <div className="sz">{m.code} · {(p.tags || [])[0] || "—"}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
