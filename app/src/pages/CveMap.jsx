import { useMemo } from "react";
import CveNodeHunt from "../components/CveNodeHunt";
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
          href: b.href || `/blog/${b.slug}`,
        };
      });
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="eyebrow">CVE map</div>
            <h2 className="section-title">Node Hunt</h2>
            <p className="section-subtitle">
              Track the intruder through the grid. Ping, trace, and isolate the target.
            </p>
          </div>
        </div>
        <div className="cve-hunt-shell">
          <CveNodeHunt entries={cveEntries} />
        </div>
      </div>
    </section>
  );
}
