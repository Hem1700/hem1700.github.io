import { useState } from "react";

export default function Certifications({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="certifications" id="certs">
      <div className="container">
        <h2>CERTIFICATIONS</h2>
        {items.map((item, idx) => {
          const isOpen = idx === openIndex;
          return (
            <div className={`cert-item${isOpen ? " open" : ""}`} key={item.title}>
              <button className="cert-title" onClick={() => toggle(idx)}>
                <span>{item.title}</span>
                <span className="arrow">&#9662;</span>
              </button>
              <div className="cert-content" style={{ maxHeight: isOpen ? 200 : 0, opacity: isOpen ? 1 : 0 }}>
                <p>{item.details}</p>
                <a href={item.href} className="view-credentials" target="_blank" rel="noreferrer">
                  View credentials
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
