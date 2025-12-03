import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useReveal } from "../hooks/useReveal";

export default function Hero({ data }) {
  const [ref, visible] = useReveal();

  useEffect(() => {
    const letters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const scramble = (el, duration = 600) => {
      const target = el.dataset.text || el.textContent;
      const start = performance.now();
      const tick = () => {
        const t = performance.now() - start;
        if (t >= duration) return (el.textContent = target);
        const pct = t / duration;
        el.textContent = [...target]
          .map((ch) => (Math.random() < pct ? ch : letters[Math.floor(Math.random() * letters.length)]))
          .join("");
        requestAnimationFrame(tick);
      };
      tick();
    };

    const nodes = document.querySelectorAll(".scramble-text");
    const handlers = [];
    nodes.forEach((node) => {
      node.dataset.text = node.textContent;
      const handler = () => scramble(node);
      handlers.push({ node, handler });
      node.addEventListener("mouseenter", handler);
    });

    return () => {
      handlers.forEach(({ node, handler }) => node.removeEventListener("mouseenter", handler));
    };
  }, []);

  return (
    <header className={`hero reveal ${visible ? "visible" : ""}`} id="home" ref={ref}>
      <div className="hero-content container">
        <h1>
          Hello, I'm <span className="highlight scramble-text">{data.highlight}</span>.
        </h1>
        <div className="hero-descriptors">
          <span className="pill scramble-text">Security Engineer</span>
          <span className="pill scramble-text">Pen Tester</span>
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
