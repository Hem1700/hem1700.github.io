import { useMemo, useState } from "react";
import CveDetailDrawer from "../components/CveDetailDrawer";
import CveConstellation from "../components/CveConstellation";
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
  const [resetKey, setResetKey] = useState(0);
  const [hoverPreview, setHoverPreview] = useState(null);
  const [highlightId, setHighlightId] = useState("");

  const handleSelectCve = (cve) => {
    setSelectedCve(cve);
    setHighlightId(cve?.id || "");
  };

  const handleReset = () => {
    setSelectedCve(null);
    setResetKey((k) => k + 1);
    setHighlightId("");
    setGroupMode("year");
  };

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="eyebrow">CVE map</div>
              <h2 className="section-title">Mind map explorer</h2>
              <p className="section-subtitle">{cveMapSummary.headline}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container cve-layout">
          <div className="cve-shell">
            <div className="mode-icon-bar" aria-hidden="true">
              <button
                className={`mode-icon ${groupMode === "year" ? "active" : ""}`}
                onClick={() => setGroupMode("year")}
                title="Group by year"
                type="button"
              >
                <span className="icon glyph-years" />
              </button>
              <button
                className={`mode-icon ${groupMode === "severity" ? "active" : ""}`}
                onClick={() => setGroupMode("severity")}
                title="Group by severity"
                type="button"
              >
                <span className="icon glyph-severity" />
              </button>
            </div>
            <div className="mindmap-canvas">
              <CveConstellation
                key={resetKey}
                data={data}
                onSelectCve={handleSelectCve}
                highlightId={highlightId}
                onHover={(payload) => {
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
              />
              {hoverPreview && (
                <div className="mindmap-preview" style={{ left: hoverPreview.x, top: hoverPreview.y }}>
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
        </div>
      </section>
      <CveDetailDrawer cve={selectedCve} onClose={() => setSelectedCve(null)} />
    </>
  );
}
