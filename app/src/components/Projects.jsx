import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import FeaturedProjects from "./FeaturedProjects";
import ProjectFilters from "./ProjectFilters";
import FeaturedCarousel from "./FeaturedCarousel";

export default function Projects({ items, showViewAll = false, showHeader = true }) {
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);
  const pageSize = 4;
  const featured = items.slice(0, 2);
  const filtered = useMemo(() => {
    if (filter === "All") return items;
    return items.filter((project) => project.tags?.some((t) => t.toLowerCase().includes(filter.toLowerCase().split(" ")[0])));
  }, [filter, items]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageItems = filtered.slice((page - 1) * pageSize, page * pageSize);

  const handleFilter = (val) => {
    setFilter(val);
    setPage(1);
  };

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
        {showHeader && <ProjectFilters activeFilter={filter} onFilterChange={handleFilter} />}
        {showHeader && <FeaturedCarousel items={featured} />}
        <div className="projects-list">
          {pageItems.map((project) => (
            <div className="project-row" key={project.title}>
              <div className="project-row-body">
                <a href={project.href} target="_blank" rel="noreferrer" className="project-title-link">
                  <h5 className="project-title">{project.title}</h5>
                </a>
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
              </div>
              <div className="project-row-cta">
                <a href={project.href} target="_blank" rel="noreferrer" className="view-credentials">
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
        {totalPages > 1 && (
          <div className="blog-pagination project-pagination">
            <button className="pill" disabled={page === 1} onClick={() => setPage(Math.max(1, page - 1))}>
              Previous
            </button>
            <span className="blog-page-indicator">
              Page {page} of {totalPages}
            </span>
            <button className="pill" disabled={page === totalPages} onClick={() => setPage(Math.min(totalPages, page + 1))}>
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
