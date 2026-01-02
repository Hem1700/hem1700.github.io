import { useMemo, useState } from "react";
import CveNodeHunt from "../components/CveNodeHunt";
import CveVaultBreach from "../components/CveVaultBreach";
import { blogs } from "../data/content";

export default function CveMapPage() {
  const [gameMode, setGameMode] = useState("node-hunt");
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

  const gameCopy = {
    "node-hunt": {
      label: "Node Hunt",
      subtitle: "Track the intruder through the grid. Ping, trace, and isolate the target.",
    },
    "vault-breach": {
      label: "Vault Breach",
      subtitle: "Rotate the lock rings until the cipher glyphs align.",
    },
  };

  const activeCopy = gameCopy[gameMode] || gameCopy["node-hunt"];

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="eyebrow">CVE map</div>
            <h2 className="section-title">CVE Games</h2>
            <p className="section-subtitle">{activeCopy.subtitle}</p>
          </div>
          <div className="section-actions">
            <div className="cve-game-toggle" role="tablist" aria-label="CVE games">
              <button
                type="button"
                role="tab"
                aria-selected={gameMode === "node-hunt"}
                className={gameMode === "node-hunt" ? "active" : ""}
                onClick={() => setGameMode("node-hunt")}
              >
                {gameCopy["node-hunt"].label}
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={gameMode === "vault-breach"}
                className={gameMode === "vault-breach" ? "active" : ""}
                onClick={() => setGameMode("vault-breach")}
              >
                {gameCopy["vault-breach"].label}
              </button>
            </div>
          </div>
        </div>
        <div className="cve-hunt-shell">
          {gameMode === "vault-breach" ? (
            <CveVaultBreach entries={cveEntries} />
          ) : (
            <CveNodeHunt entries={cveEntries} />
          )}
        </div>
      </div>
    </section>
  );
}
