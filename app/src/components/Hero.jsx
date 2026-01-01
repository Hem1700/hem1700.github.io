import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";

export default function Hero({ data }) {
  const [ref, visible] = useReveal();

  return (
    <header className={`hero reveal ${visible ? "visible" : ""}`} id="home" ref={ref}>
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">Security engineer // pen tester</div>
          <div className="hero-lines mbm">
            <h1 className="hero-display">A different</h1>
            <h1 className="hero-display">security</h1>
            <h1 className="hero-display">approach</h1>
          </div>
          <p className="hero-lead">{data.blurb}</p>
          <div className="hero-actions">
            <Link className="button primary" to="/projects">
              View Projects
            </Link>
            <Link className="button ghost" to="/certifications">
              View Certifications
            </Link>
          </div>
          <div className="hero-meta">
            <span className="pill">Threat Hunting</span>
            <span className="pill">Application Security</span>
            <span className="pill">Privacy</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame">
            <img src={data.image} alt={data.highlight} />
          </div>
          <div className="hero-card">Operator {data.highlight}</div>
        </div>
      </div>
    </header>
  );
}
