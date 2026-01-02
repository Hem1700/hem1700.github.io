import { useMemo, useState } from "react";
import CveDetailDrawer from "../components/CveDetailDrawer";
import CveConstellation from "../components/CveConstellation";
import { blogs } from "../data/content";
import { buildBlogCveHierarchy, cveMapSummary } from "../data/cveMapData";

const stopWords = new Set([
  "the",
  "and",
  "with",
  "from",
  "into",
  "your",
  "this",
  "that",
  "non",
  "weaponized",
  "reverse",
  "engineering",
  "watchguard",
  "firebox",
  "understanding",
  "tiny",
  "fake",
  "server",
  "transient",
  "scheduler",
  "attacks",
  "cve",
  "blog",
  "kernel",
  "audit",
  "linux",
]);

const pickKeyword = (text) => {
  const cleaned = (text || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ");
  const words = cleaned.split(/\s+/).filter(Boolean);
  const keyword = words.find((word) => word.length > 4 && !stopWords.has(word));
  return keyword ? keyword.toUpperCase() : "SIGNAL";
};

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const buildCaseFiles = (entries) =>
  entries.map((entry, idx) => {
    const brief = entry.summary || "";
    const briefText = brief ? `${brief.slice(0, 140)}${brief.length > 140 ? "..." : ""}` : "No briefing attached.";
    const keyword = pickKeyword(`${entry.title} ${entry.summary || ""}`);
    const digits = String(entry.id || "").match(/\d+/g);
    const lastDigits = digits && digits.length ? digits[digits.length - 1].slice(-4) : "";
    return {
      idx,
      id: entry.id,
      title: entry.title,
      severity: entry.severity,
      year: entry.year,
      cvss: entry.cvss,
      keyword,
      brief: briefText,
      hint: lastDigits ? `Ends with ${lastDigits}.` : "Check the year cluster for a match.",
    };
  });

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
  const caseFiles = useMemo(() => buildCaseFiles(blogCves), [blogCves]);
  const [selectedCve, setSelectedCve] = useState(null);
  const [hoverPreview, setHoverPreview] = useState(null);
  const [highlightId, setHighlightId] = useState("");
  const [caseIndex, setCaseIndex] = useState(0);
  const [caseSolvedIds, setCaseSolvedIds] = useState([]);
  const [caseMisses, setCaseMisses] = useState(0);
  const [caseMessage, setCaseMessage] = useState("");

  const handleSelectCve = (cve) => {
    const activeCase = caseFiles[caseIndex];
    if (!activeCase || !cve?.id) {
      setSelectedCve(cve);
      setHighlightId(cve?.id || "");
      return;
    }

    if (cve.id === activeCase.id) {
      setSelectedCve(cve);
      setHighlightId(cve.id);
      setCaseMessage("Match confirmed. Evidence logged.");
      setCaseSolvedIds((prev) => (prev.includes(cve.id) ? prev : [...prev, cve.id]));
    } else {
      setCaseMisses((prev) => prev + 1);
      setCaseMessage("No match. Follow the clue.");
    }
  };

  const handleNextCase = () => {
    if (!caseFiles.length) return;
    const nextIndex = (caseIndex + 1) % caseFiles.length;
    setCaseIndex(nextIndex);
    setCaseMisses(0);
    setCaseMessage("");
    setSelectedCve(null);
    setHighlightId("");
  };

  const handleResetCases = () => {
    setCaseIndex(0);
    setCaseSolvedIds([]);
    setCaseMisses(0);
    setCaseMessage("");
    setSelectedCve(null);
    setHighlightId("");
  };

  const activeCase = caseFiles[clamp(caseIndex, 0, Math.max(0, caseFiles.length - 1))];
  const solvedCount = caseSolvedIds.length;
  const isSolved = activeCase ? caseSolvedIds.includes(activeCase.id) : false;
  const showHint = caseMisses >= 2 && !isSolved;

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="eyebrow">CVE map</div>
              <h2 className="section-title">Constellation case board</h2>
              <p className="section-subtitle">{cveMapSummary.headline}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container cve-layout">
          <aside className="case-panel">
            <div className="case-header">
              <div>
                <div className="eyebrow">Case file</div>
                <h3 className="case-title">Constellation dossier</h3>
              </div>
              <div className="case-progress">
                Solved {solvedCount}/{caseFiles.length || 0}
              </div>
            </div>
            {activeCase ? (
              <>
                <div className="case-number">Case {activeCase.idx + 1}</div>
                <div className="case-stamp">Severity {activeCase.severity}</div>
                <div className="case-meta">
                  <div>
                    <span className="case-label">Year</span>
                    <span className="case-value">{activeCase.year}</span>
                  </div>
                  <div>
                    <span className="case-label">CVSS</span>
                    <span className="case-value">{activeCase.cvss}</span>
                  </div>
                  <div>
                    <span className="case-label">Clue</span>
                    <span className="case-value">Keyword: {activeCase.keyword}</span>
                  </div>
                </div>
                <p className="case-brief">{activeCase.brief}</p>
                {caseMessage && <div className="case-message">{caseMessage}</div>}
                {showHint && <div className="case-hint">Hint: {activeCase.hint}</div>}
                <div className="case-actions">
                  <button className="pill" type="button" onClick={handleNextCase} disabled={!isSolved}>
                    Next case
                  </button>
                  <button className="pill" type="button" onClick={handleResetCases}>
                    Reset log
                  </button>
                </div>
                <div className="case-log">
                  <div className="case-label">Case log</div>
                  {solvedCount ? (
                    <div className="case-log-list">
                      {caseSolvedIds.slice(-4).map((id) => (
                        <div key={id} className="case-log-item">
                          {id}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="case-log-empty">No cases solved yet.</div>
                  )}
                </div>
              </>
            ) : (
              <p className="case-empty">No CVE cases found yet.</p>
            )}
          </aside>
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
