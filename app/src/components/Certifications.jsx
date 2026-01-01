import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import CertBadge from "./CertBadge";

const domains = ["All", "Security", "Cloud", "Networking"];

export default function Certifications({ items = [], showViewAll = false, showHeader = true, wrap = true }) {
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const filteredItems = useMemo(() => {
    if (filter === "All") return items;
    return items.filter((item) => item.domain ? item.domain === filter : true);
  }, [filter, items]);
  const totalPages = Math.max(1, Math.ceil(filteredItems.length / pageSize));
  const pageItems = filteredItems.slice((page - 1) * pageSize, page * pageSize);

  const handleFilter = (domain) => {
    setFilter(domain);
    setPage(1);
  };

  const content = (
    <>
      {showHeader && (
        <div className="section-header">
          <div>
            <h2 className="section-title">Certifications</h2>
          </div>
          {showViewAll && (
            <div className="section-actions">
              <Link className="link-button" to="/certifications">
                View all certifications
              </Link>
            </div>
          )}
        </div>
      )}
      {showHeader && (
        <div className="filter-chips">
          {domains.map((domain) => (
            <button
              key={domain}
              className={`chip ${domain === filter ? "active" : ""}`}
              type="button"
              onClick={() => handleFilter(domain)}
            >
              {domain}
            </button>
          ))}
        </div>
      )}
      <div className="cert-list">
        {pageItems.map((item) => (
          <div className="cert-row" key={item.title}>
            <div className="cert-row-meta">
              <div className="cert-row-badge">
                <CertBadge issuer={item.issuer} />
              </div>
              <div className="cert-row-tags">
                <span className="pill">{item.domain}</span>
                <span className="pill">{item.issuer}</span>
              </div>
            </div>
            <div className="cert-row-body">
              <div className="cert-row-title">{item.title}</div>
              <p className="cert-row-details">{item.details}</p>
            </div>
            <div className="cert-row-cta">
              <a href={item.href} className="view-credentials" target="_blank" rel="noreferrer">
                View
              </a>
            </div>
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="blog-pagination project-pagination">
          <button className="pill" disabled={page === 1} onClick={() => setPage(Math.max(1, page - 1))} type="button">
            Previous
          </button>
          <span className="blog-page-indicator">
            Page {page} of {totalPages}
          </span>
          <button className="pill" disabled={page === totalPages} onClick={() => setPage(Math.min(totalPages, page + 1))} type="button">
            Next
          </button>
        </div>
      )}
    </>
  );

  if (!wrap) {
    return <div className="certifications">{content}</div>;
  }

  return (
    <section className="section certifications" id="certs">
      <div className="container">{content}</div>
    </section>
  );
}
