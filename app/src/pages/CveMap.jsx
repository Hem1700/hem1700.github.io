import { useEffect, useMemo, useRef, useState } from "react";
import CveDetailDrawer from "../components/CveDetailDrawer";
import CveMindMap from "../components/CveMindMap";
import { blogs } from "../data/content";
import { buildBlogCveHierarchy, cveMapSummary } from "../data/cveMapData";

export default function CveMapPage() {
  const [groupMode, setGroupMode] = useState("year");
  const blogCves = useMemo(() => {
    const isCveLike = (title) => title.toUpperCase().includes("CVE");
    const parseYear = (dateStr) => {
      if (!dateStr) return "Unknown";
      const parsed = new Date(dateStr);
      const year = parsed.getFullYear();
      return Number.isFinite(year) ? String(year) : "Unknown";
    };
    const severityFromId = (id) => {
      const digits = (id || "").match(/\d/g) || [];
      const sum = digits.reduce((acc, d) => acc + Number(d), 0);
      const bands = ["Low", "Medium", "High", "Critical"];
      return bands[sum % bands.length];
    };
    const cvssFromSeverity = (sev) => {
      if (sev === "Critical") return 9.4;
      if (sev === "High") return 8.1;
      if (sev === "Medium") return 6.0;
      return 4.0;
    };

    return blogs
      .filter((b) => isCveLike(b.title))
      .map((b) => {
        const idMatch = b.title.match(/CVE[-–](\d{4})[-–]?([\d]+)/i);
        const id = idMatch ? `CVE-${idMatch[1]}-${idMatch[2]}` : b.slug.toUpperCase();
        const severity = severityFromId(id);
        return {
          id,
          title: b.title,
          severity,
          cvss: cvssFromSeverity(severity),
          year: parseYear(b.date),
          kev: false,
          summary: b.excerpt,
          href: b.href || `/blog/${b.slug}`,
        };
      });
  }, []);

  const data = useMemo(() => buildBlogCveHierarchy(blogCves, groupMode), [blogCves, groupMode]);
  const [selectedCve, setSelectedCve] = useState(null);
  const [focusPath, setFocusPath] = useState([]);
  const [resetKey, setResetKey] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [hoverPreview, setHoverPreview] = useState(null);
  const [highlightId, setHighlightId] = useState("");

  const handleSelectCve = (cve) => {
    setSelectedCve(cve);
    setHighlightId(cve?.id || "");
  };

  const handleReset = () => {
    setSelectedCve(null);
    setFocusPath([]);
    setResetKey((k) => k + 1);
    setHighlightId("");
    setFocusPath([]);
    setGroupMode("year");
  };

  return (
    <div className="cve-fullscreen">
      <div className="mindmap-stage mindmap-shell">
        <div className="mode-icon-bar" aria-hidden="true">
          <button
            className={`mode-icon ${groupMode === "year" ? "active" : ""}`}
            onClick={() => setGroupMode("year")}
            title="Group by year"
          >
            <span className="icon glyph-years" />
          </button>
          <button
            className={`mode-icon ${groupMode === "severity" ? "active" : ""}`}
            onClick={() => setGroupMode("severity")}
            title="Group by severity"
          >
            <span className="icon glyph-severity" />
          </button>
        </div>
        <div className="mindmap-canvas">
          <CveMindMap
            key={resetKey}
            data={data}
            onSelectCve={handleSelectCve}
            onFocusPath={setFocusPath}
            highlightId={highlightId}
            onHover={(payload) => {
              setHovered(payload?.node || null);
              if (payload && payload.screen) {
                setHoverPreview({
                  name: payload.node.name,
                  title: payload.node.info?.title || payload.node.name,
                  href: payload.node.info?.href,
                  x: payload.screen.x,
                  y: payload.screen.y,
                });
              } else {
                setHoverPreview(null);
              }
            }}
            hoveredId={hovered?.id}
          />
          {hoverPreview && (
            <div
              className="mindmap-preview"
              style={{ left: hoverPreview.x, top: hoverPreview.y }}
            >
              <div className="preview-title">{hoverPreview.title}</div>
              {hoverPreview.href ? (
                <a href={hoverPreview.href} target="_blank" rel="noreferrer">
                  open blog
                </a>
              ) : null}
            </div>
          )}
        </div>
      </div>
      <CveDetailDrawer cve={selectedCve} onClose={() => setSelectedCve(null)} />
    </div>
  );
}
