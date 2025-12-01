import { Link } from "react-router-dom";

export default function Projects({ items, showViewAll = false, showHeader = true }) {
  return (
    <section className="projects" id="projects">
      <div className="container">
        {showHeader && (
          <div className="section-header">
            <div>
              <h2 className="section-title">Projects</h2>
              <p className="section-subtitle">Every project is a unique endeavor. See what I have accomplished so far!</p>
            </div>
            {showViewAll && (
              <div className="section-actions">
                <Link className="link-button" to="/projects">
                  View all projects
                </Link>
              </div>
            )}
          </div>
        )}
        <div className="projects-grid">
          {items.map((project) => (
            <div className="project-card" key={project.title}>
              <a href={project.href} target="_blank" rel="noreferrer">
                <h5 className="project-title">{project.title}</h5>
                <p className="project-description">{project.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
