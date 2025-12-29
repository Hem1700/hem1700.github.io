import { useMemo, useState } from "react";
import CveCirclePack from "../components/CveCirclePack";
import CveDetailDrawer from "../components/CveDetailDrawer";
import HudWindow from "../components/HudWindow";
import { buildFilteredHierarchy, cveMapSummary, findCveById } from "../data/cveMapData";

export default function CveMapPage() {
  const [filters, setFilters] = useState({
    severities: ["Critical", "High", "Medium", "Low"],
    minCvss: 0,
    minYear: 2024,
    kevOnly: false,
  });
  const data = useMemo(() => buildFilteredHierarchy(filters), [filters]);
  const [selectedCve, setSelectedCve] = useState(null);
  const [focusPath, setFocusPath] = useState([]);
  const [resetKey, setResetKey] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [search, setSearch] = useState("");
  const [highlightId, setHighlightId] = useState("");

  const handleSelectCve = (cve) => {
    setSelectedCve(cve);
    setHighlightId(cve?.id || "");
  };

  const handleReset = () => {
    setSelectedCve(null);
    setFocusPath([]);
    setResetKey((k) => k + 1);
    setFilters({
      severities: ["Critical", "High", "Medium", "Low"],
      minCvss: 0,
      minYear: 2024,
      kevOnly: false,
    });
    setSearch("");
    setHighlightId("");
  };

  const toggleSeverity = (sev) => {
    setFilters((f) => {
      const exists = f.severities.includes(sev);
      const next = exists ? f.severities.filter((s) => s !== sev) : [...f.severities, sev];
      return { ...f, severities: next.length ? next : [sev] };
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    const cve = findCveById(search.trim());
    if (cve) {
      setSelectedCve(cve);
      setHighlightId(cve.id);
    } else {
      setHighlightId("");
    }
  };

  return (
    <div className="hud-workspace cve-map-page">
      <HudWindow title="CVE Mind Map" subtitle="zoomable clusters" initialSize={{ width: 1180 }}>
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
                <li>Click a bubble to zoom deeper; click a CVE bubble to open details.</li>
                <li>Use filters to reshape the graph; hover to see node metrics.</li>
                <li>Search a CVE ID to highlight it. Reset to clear filters.</li>
              </ul>
              {focusPath.length ? <p className="breadcrumb">Path: {focusPath.join(" / ")}</p> : <p className="breadcrumb">Path: CVE Map</p>}
            </div>
            <div className="cve-map-actions">
              <button className="button ghost" type="button" onClick={handleReset}>
                Reset View
              </button>
            </div>
          </div>
          <div className="cve-map-filters">
            <div className="filter-block">
              <p className="pill">Severity</p>
              <div className="pill-group">
                {["Critical", "High", "Medium", "Low"].map((sev) => (
                  <button
                    key={sev}
                    type="button"
                    className={`pill ${filters.severities.includes(sev) ? "active" : ""}`}
                    onClick={() => toggleSeverity(sev)}
                  >
                    {sev}
                  </button>
                ))}
              </div>
            </div>
            <div className="filter-block sliders">
              <label>
                Min CVSS: {filters.minCvss.toFixed(1)}
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.1"
                  value={filters.minCvss}
                  onChange={(e) => setFilters((f) => ({ ...f, minCvss: Number(e.target.value) }))}
                />
              </label>
              <label>
                Min Year: {filters.minYear}
                <input
                  type="range"
                  min="2018"
                  max="2025"
                  step="1"
                  value={filters.minYear}
                  onChange={(e) => setFilters((f) => ({ ...f, minYear: Number(e.target.value) }))}
                />
              </label>
            </div>
            <div className="filter-block toggles">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={filters.kevOnly}
                  onChange={(e) => setFilters((f) => ({ ...f, kevOnly: e.target.checked }))}
                />
                KEV only
              </label>
            </div>
            <form className="filter-block search" onSubmit={handleSearch}>
              <label htmlFor="cve-search">Search CVE ID</label>
              <div className="search-row">
                <input
                  id="cve-search"
                  type="text"
                  placeholder="e.g., CVE-2025-12020"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit" className="button ghost">
                  Highlight
                </button>
              </div>
            </form>
            {hovered && (
              <div className="hover-readout">
                <div className="hover-title">{hovered.name}</div>
                <div className="hover-meta">
                  <span className="pill">{hovered.type}</span>
                  {hovered.metrics?.total ? <span className="pill">Total: {hovered.metrics.total}</span> : null}
                  {hovered.metrics?.kev ? <span className="pill">KEV: {hovered.metrics.kev}</span> : null}
                  {hovered.metrics?.maxCvss ? <span className="pill">Max CVSS: {hovered.metrics.maxCvss}</span> : null}
                  {hovered.metrics?.latestYear ? <span className="pill">Latest: {hovered.metrics.latestYear}</span> : null}
                  {hovered.info?.severity ? <span className="pill">Severity: {hovered.info.severity}</span> : null}
                  {hovered.info?.cvss ? <span className="pill">CVSS: {hovered.info.cvss}</span> : null}
                  {hovered.info?.year ? <span className="pill">Year: {hovered.info.year}</span> : null}
                  {hovered.info?.kev ? <span className="pill kev">KEV</span> : null}
                </div>
              </div>
            )}
          </div>
          <div className="cve-map-content">
            <div className="cve-map-card">
              <CveCirclePack
                key={resetKey}
                data={data}
                onSelectCve={handleSelectCve}
                onFocusPath={setFocusPath}
                highlightId={highlightId}
                onHover={setHovered}
              />
            </div>
            <CveDetailDrawer cve={selectedCve} onClose={() => setSelectedCve(null)} />
          </div>
        </section>
      </HudWindow>
    </div>
  );
}
