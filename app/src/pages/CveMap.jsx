import { useMemo, useState } from "react";
import CveNodeHunt from "../components/CveNodeHunt";
import CveSignalBeacon from "../components/CveSignalBeacon";
import CvePacketIntercept from "../components/CvePacketIntercept";
import CveMalwareMaze from "../components/CveMalwareMaze";
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
    "signal-beacon": {
      label: "Signal Beacon",
      subtitle: "Rotate the beacon and lock onto the hidden signal band.",
    },
    "packet-intercept": {
      label: "Packet Intercept",
      subtitle: "Scan traffic lanes and intercept the malicious payload.",
    },
    "malware-maze": {
      label: "Malware Maze",
      subtitle: "Navigate the wireframe maze and quarantine the infected node.",
    },
  };

  const activeCopy = gameCopy[gameMode] || gameCopy["node-hunt"];
  const ActiveGame = {
    "node-hunt": CveNodeHunt,
    "signal-beacon": CveSignalBeacon,
    "packet-intercept": CvePacketIntercept,
    "malware-maze": CveMalwareMaze,
  }[gameMode] || CveNodeHunt;

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="eyebrow">Security Games</div>
            <h2 className="section-title">Security Games</h2>
            <p className="section-subtitle">{activeCopy.subtitle}</p>
          </div>
          <div className="section-actions">
            <div className="cve-game-toggle" role="tablist" aria-label="Security games">
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
                aria-selected={gameMode === "signal-beacon"}
                className={gameMode === "signal-beacon" ? "active" : ""}
                onClick={() => setGameMode("signal-beacon")}
              >
                {gameCopy["signal-beacon"].label}
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={gameMode === "packet-intercept"}
                className={gameMode === "packet-intercept" ? "active" : ""}
                onClick={() => setGameMode("packet-intercept")}
              >
                {gameCopy["packet-intercept"].label}
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={gameMode === "malware-maze"}
                className={gameMode === "malware-maze" ? "active" : ""}
                onClick={() => setGameMode("malware-maze")}
              >
                {gameCopy["malware-maze"].label}
              </button>
            </div>
          </div>
        </div>
        <div className="cve-hunt-shell">
          <ActiveGame entries={cveEntries} />
        </div>
      </div>
    </section>
  );
}
