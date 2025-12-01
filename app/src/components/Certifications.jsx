import { useState } from "react";
import { Link } from "react-router-dom";

export default function Certifications({ items, showViewAll = false, showHeader = true }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

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
        <div className="cert-grid">
          {items.map((item, idx) => {
            const isOpen = idx === openIndex;
            return (
              <div className={`cert-item${isOpen ? " open" : ""}`} key={item.title}>
                <button className="cert-title" onClick={() => toggle(idx)}>
                  <span>{item.title}</span>
                  <span className="arrow">&#9662;</span>
                </button>
                <div className="cert-content">
                  <p>{item.details}</p>
                  <a href={item.href} className="view-credentials" target="_blank" rel="noreferrer">
                    View credentials
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
