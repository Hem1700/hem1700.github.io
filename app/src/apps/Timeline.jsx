import { certMeta, experience } from "../data/content";

export default function Timeline() {
  return (
    <div className="atm">
      <h1>Career Trajectory</h1>
      <div className="sb">// {experience.length} stops · {certMeta.length} certifications</div>
      <div className="tl">
        {experience.map((e, i) => {
          const isCurrent = e.range.toLowerCase().includes("present");
          return (
            <div key={i} className={`stop ${isCurrent ? "cur" : ""}`}>
              <div className="rg">{e.range}</div>
              <div className="ro">
                {e.role}
                {isCurrent && <span className="pil">NOW</span>}
              </div>
              <div className="or">{e.org}</div>
              <div className="bl">{e.desc}</div>
            </div>
          );
        })}
      </div>
      <h2 style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--mut)", letterSpacing: ".16em", textTransform: "uppercase", margin: "22px 0 10px" }}>
        // CERTIFICATIONS
      </h2>
      <div className="cg">
        {certMeta.map((c, i) => (
          <a key={i} className="ce" href={c.href} target="_blank" rel="noreferrer">
            <div className="t">{c.title}</div>
            <div className="m">{c.iss} · {c.y}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
