export default function CveDetailDrawer({ cve, onClose }) {
  return (
    <aside className={`cve-drawer ${cve ? "open" : ""}`} aria-label="CVE details">
      <div className="cve-drawer__header">
        <div>
          <p className="pill">CVE Detail</p>
          <h3>{cve?.id || "Select a CVE"}</h3>
        </div>
        <button className="button ghost" type="button" onClick={onClose}>
          Close
        </button>
      </div>
      {cve ? (
        <div className="cve-drawer__body">
          <p className="cve-title">{cve.title}</p>
          <div className="cve-meta">
            <span className="pill">Severity: {cve.severity}</span>
            <span className="pill">CVSS: {cve.cvss}</span>
            <span className={`pill ${cve.kev ? "kev" : ""}`}>{cve.kev ? "KEV" : "Not KEV"}</span>
            <span className="pill">Year: {cve.year}</span>
          </div>
          <p>{cve.summary}</p>
          {cve.references?.length ? (
            <div className="cve-links">
              <h4>References</h4>
              <ul>
                {cve.references.map((ref) => (
                  <li key={ref}>
                    <a href={ref} target="_blank" rel="noreferrer">
                      {ref}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      ) : (
        <p className="text-muted">Click a CVE node to see details here.</p>
      )}
    </aside>
  );
}
