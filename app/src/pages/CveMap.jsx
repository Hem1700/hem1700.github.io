import { useMemo } from "react";
import CveRunnerGame from "../components/CveRunnerGame";
import { blogs } from "../data/content";

export default function CveMapPage() {
  const cveEntries = useMemo(() => {
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
        };
      });
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="eyebrow">CVE map</div>
            <h2 className="section-title">CVE Runner</h2>
            <p className="section-subtitle">
              Patch the vulnerabilities. Dodge the breaches. Keep the system alive.
            </p>
          </div>
        </div>
        <div className="cve-game-shell">
          <CveRunnerGame entries={cveEntries} />
        </div>
      </div>
    </section>
  );
}
