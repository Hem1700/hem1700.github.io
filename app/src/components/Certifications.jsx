import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import CertBadge from "./CertBadge";

const domains = ["All", "Security", "Cloud", "Networking"];

export default function Certifications({ items, showViewAll = false, showHeader = true }) {
  const [filter, setFilter] = useState("All");
  const filteredItems = useMemo(() => {
    if (filter === "All") return items;
    return items.filter((item) => item.domain ? item.domain === filter : true);
  }, [filter, items]);

  return (
    <section className="certifications" id="certs">
      <div className="container">
        {showHeader && (
          <div className="section-header">
            <div>
              <h2>CERTIFICATIONS</h2>
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
              <button key={domain} className={`chip ${domain === filter ? "active" : ""}`} type="button" onClick={() => setFilter(domain)}>
                {domain}
              </button>
            ))}
          </div>
        )}
        <div className="cert-grid">
          {filteredItems.map((item) => (
            <div className="cert-item" key={item.title}>
              <div className="cert-title">
                <CertBadge issuer={item.issuer} />
                <span>{item.title}</span>
              </div>
              <div className="cert-content">
                <p>{item.details}</p>
                <a href={item.href} className="view-credentials" target="_blank" rel="noreferrer">
                  View credentials
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
