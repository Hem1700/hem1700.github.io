import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import FeaturedProjects from "./FeaturedProjects";
import ProjectFilters from "./ProjectFilters";
import FeaturedCarousel from "./FeaturedCarousel";

export default function Projects({ items, showViewAll = false, showHeader = true }) {
  const [filter, setFilter] = useState("All");
  const featured = items.slice(0, 2);
  const filtered = useMemo(() => {
    if (filter === "All") return items;
    return items.filter((project) => project.tags?.some((t) => t.toLowerCase().includes(filter.toLowerCase().split(" ")[0])));
  }, [filter, items]);

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
        {showHeader && <ProjectFilters activeFilter={filter} onFilterChange={setFilter} />}
        {showHeader && <FeaturedCarousel items={featured} />}
        <div className="projects-grid">
          {filtered.map((project) => (
            <div className="project-card" key={project.title}>
              <a href={project.href} target="_blank" rel="noreferrer">
                <h5 className="project-title">{project.title}</h5>
                <p className="project-description">{project.description}</p>
                {project.tags?.length ? (
                  <div className="project-tags">
                    {project.tags.map((t) => (
                      <span className="pill" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
