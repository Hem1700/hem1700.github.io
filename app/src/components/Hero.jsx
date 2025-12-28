import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";

export default function Hero({ data }) {
  const [ref, visible] = useReveal();

  return (
    <header className={`hero reveal ${visible ? "visible" : ""}`} id="home" ref={ref}>
      <div className="hero-content container">
        <div className="hero-copy">
          <div className="hero-badge">Assistant to the Regional Security Engineer</div>
          <h1>
            <span data-glitch={`Hello, I'm ${data.highlight}.`}>Hello, I'm <span className="highlight">{data.highlight}</span>.</span>
          </h1>
          <div className="hero-descriptors">
            <span className="pill">Security Engineer</span>
            <span className="pill">Pen Tester</span>
          </div>
          <p className="hero-funfact">Fun fact: Bears. Beets. Battlestar Encryption.</p>
          <p>{data.blurb}</p>
          <div className="hero-ctas">
            <Link className="button primary clipboard" to="/projects">
              View Projects
            </Link>
            <Link className="button ghost clipboard" to="/certifications">
              View Certificates
            </Link>
          </div>
          <div className="scroll-down-arrow">
            <a href="#about" className="arrow-link">
              <span>&#8595;</span>
            </a>
          </div>
        </div>
        <div className="hero-photo-card">
          <div className="polaroid">
            <img src={data.image} className="heading-image glitch" alt="Heading" />
          </div>
        </div>
      </div>
    </header>
  );
}
