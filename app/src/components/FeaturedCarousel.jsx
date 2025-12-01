import { useState } from "react";

export default function FeaturedCarousel({ items }) {
  const [index, setIndex] = useState(0);
  if (!items?.length) return null;
  const current = items[index];

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  return (
    <div className="featured-carousel">
      <div className="featured-card">
        <div className="featured-meta">
          <span className="pill">Featured</span>
          {current.tag && <span className="pill">{current.tag}</span>}
        </div>
        <h3>{current.title}</h3>
        <p>{current.description}</p>
        <div className="project-tags">
          {(current.tags || []).map((t) => (
            <span key={t} className="pill">
              {t}
            </span>
          ))}
        </div>
        <div className="featured-actions">
          <a href={current.href} target="_blank" rel="noreferrer" className="link-button">
            View
          </a>
        </div>
      </div>
      {items.length > 1 && (
        <div className="featured-controls">
          <button type="button" onClick={prev} className="button ghost">
            ←
          </button>
          <button type="button" onClick={next} className="button ghost">
            →
          </button>
        </div>
      )}
    </div>
  );
}
