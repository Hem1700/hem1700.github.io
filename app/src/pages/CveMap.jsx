import { useMemo, useState } from "react";
import CveCirclePack from "../components/CveCirclePack";
import CveDetailDrawer from "../components/CveDetailDrawer";
import { buildCveHierarchy, cveMapSummary } from "../data/cveMapData";

export default function CveMapPage() {
  const data = useMemo(() => buildCveHierarchy(), []);
  const [selectedCve, setSelectedCve] = useState(null);
  const [focusPath, setFocusPath] = useState([]);
  const [resetKey, setResetKey] = useState(0);

  const handleSelectCve = (cve) => {
    setSelectedCve(cve);
  };

  const handleReset = () => {
    setSelectedCve(null);
    setFocusPath([]);
    setResetKey((k) => k + 1);
  };

  return (
    <div className="cve-map-page">
      <header className="blog-welcome-section">
        <div className="container text-center">
          <h1>CVE Mind Map</h1>
          <p className="blog-subtitle">{cveMapSummary.headline}</p>
          <p className="blog-subtitle">{cveMapSummary.datasetHint}</p>
        </div>
      </header>
      <section className="container cve-map-layout">
        <div className="cve-map-controls">
          <div>
            <p className="pill">Progressive disclosure</p>
            <h2>Zoom into Domain → Tech → Cluster → CVE</h2>
            <ul className="cve-map-guidelines">
              <li>Click a bubble to zoom deeper.</li>
              <li>Clusters group CVEs by severity/year/theme to avoid overload.</li>
              <li>Click a CVE bubble to open its detail drawer.</li>
            </ul>
            {focusPath.length ? (
              <p className="breadcrumb">
                Path: {focusPath.join(" / ")}
              </p>
            ) : (
              <p className="breadcrumb">Path: CVE Map</p>
            )}
          </div>
          <div className="cve-map-actions">
            <button className="button ghost" type="button" onClick={handleReset}>
              Reset View
            </button>
          </div>
        </div>
        <div className="cve-map-content">
          <div className="cve-map-card">
            <CveCirclePack
              key={resetKey}
              data={data}
              onSelectCve={handleSelectCve}
              onFocusPath={setFocusPath}
            />
          </div>
          <CveDetailDrawer cve={selectedCve} onClose={() => setSelectedCve(null)} />
        </div>
      </section>
    </div>
  );
}
