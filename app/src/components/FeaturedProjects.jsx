export default function FeaturedProjects({ items }) {
  if (!items?.length) return null;
  return (
    <div className="featured-projects">
      {items.map((proj) => (
        <a key={proj.title} href={proj.href} target="_blank" rel="noreferrer" className="featured-card">
          <div className="featured-meta">
            <span className="pill">Featured</span>
            <span className="pill">{proj.tag || "Security"}</span>
          </div>
          <h3>{proj.title}</h3>
          <p>{proj.description}</p>
          <div className="project-tags">
            {(proj.tags || ["Security"]).map((t) => (
              <span key={t} className="pill">
                {t}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  );
}
