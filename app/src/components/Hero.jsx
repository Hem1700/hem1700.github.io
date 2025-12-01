import { Link } from "react-router-dom";

export default function Hero({ data }) {
  return (
    <header className="hero" id="home">
      <div className="hero-content container">
        <h1>
          Hello, I'm <span className="highlight">{data.highlight}</span>.
        </h1>
        <div className="hero-descriptors">
          <span className="pill">Security Engineer</span>
          <span className="pill">Pen Tester</span>
        </div>
        <img src={data.image} className="heading-image" alt="Heading" />
        <p>{data.blurb}</p>
        <div className="hero-ctas">
          <Link className="button primary" to="/projects">
            View Projects
          </Link>
          <Link className="button ghost" to="/certifications">
            View Certifications
          </Link>
        </div>
        <div className="scroll-down-arrow">
          <a href="#about" className="arrow-link">
            <span>&#8595;</span>
          </a>
        </div>
      </div>
    </header>
  );
}
