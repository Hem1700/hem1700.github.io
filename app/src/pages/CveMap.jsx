import { useMemo, useState } from "react";
import CveDetailDrawer from "../components/CveDetailDrawer";
import CveMindMap from "../components/CveMindMap";
import { blogs } from "../data/content";
import { buildBlogCveHierarchy, cveMapSummary } from "../data/cveMapData";

export default function CveMapPage() {
  const blogCves = useMemo(() => {
    const isCveLike = (title) => title.toUpperCase().includes("CVE");
    const parseYear = (dateStr) => {
      if (!dateStr) return "Unknown";
      const parsed = new Date(dateStr);
      const year = parsed.getFullYear();
      return Number.isFinite(year) ? String(year) : "Unknown";
    };

    return blogs
      .filter((b) => isCveLike(b.title))
      .map((b) => {
        const idMatch = b.title.match(/CVE[-–](\d{4})[-–]?([\d]+)/i);
        const id = idMatch ? `CVE-${idMatch[1]}-${idMatch[2]}` : b.slug.toUpperCase();
        return {
          id,
          title: b.title,
          severity: "Info",
          cvss: 0,
          year: parseYear(b.date),
          kev: false,
          summary: b.excerpt,
          href: b.href || `/blog/${b.slug}`,
        };
      });
  }, []);

  const data = useMemo(() => buildBlogCveHierarchy(blogCves), [blogCves]);
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
    setSearch("");
    setHighlightId("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    const target = blogCves.find((c) => c.id.toLowerCase() === search.trim().toLowerCase());
    if (target) {
      setSelectedCve(target);
      setHighlightId(target.id);
    } else setHighlightId("");
  };

  return (
    <div className="cve-fullscreen">
      <div className="mindmap-controls">
        <div className="mindmap-path">
          <p className="pill">Mind Map</p>
          <span className="breadcrumb">{focusPath.length ? focusPath.join(" / ") : "CVE Map"}</span>
        </div>
        <p className="mindmap-hint">
          Drag to explore, scroll/pinch to zoom, click nodes to expand/collapse, click CVEs for details.
        </p>
        <form className="mindmap-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search CVE ID (e.g., CVE-2025-12020)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="button ghost">
            Highlight
          </button>
          <button type="button" className="button ghost" onClick={handleReset}>
            Reset
          </button>
        </form>
        {hovered && (
          <div className="mindmap-hover">
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
      <div className="mindmap-stage mindmap-shell">
        <header className="blog-welcome-section compact overlay">
          <div className="container text-center">
            <h1>{cveMapSummary.headline}</h1>
            <p className="blog-subtitle">{cveMapSummary.datasetHint}</p>
          </div>
        </header>
        <div className="mindmap-canvas">
          <CveMindMap
            key={resetKey}
            data={data}
            onSelectCve={handleSelectCve}
            onFocusPath={setFocusPath}
            highlightId={highlightId}
            onHover={setHovered}
          />
        </div>
      </div>
      <CveDetailDrawer cve={selectedCve} onClose={() => setSelectedCve(null)} />
    </div>
  );
}
