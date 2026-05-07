import { useMemo, useState } from "react";
import CveNodeHunt from "../components/CveNodeHunt";
import CvePacketIntercept from "../components/CvePacketIntercept";
import CveMalwareMaze from "../components/CveMalwareMaze";
import { blogs } from "../data/content";

const GAMES = {
  "node-hunt": { label: "Node Hunt", Cmp: CveNodeHunt },
  "packet-intercept": { label: "Packet Intercept", Cmp: CvePacketIntercept },
  "malware-maze": { label: "Malware Maze", Cmp: CveMalwareMaze },
};

export default function Games({ initialGame = "node-hunt" }) {
  const [gameMode, setGameMode] = useState(GAMES[initialGame] ? initialGame : "node-hunt");
  const [difficulty, setDifficulty] = useState("standard");

  const cveEntries = useMemo(() => {
    const isCveLike = (t) => t.toUpperCase().includes("CVE");
    const severityFromId = (id) => {
      const digits = (id || "").match(/\d/g) || [];
      const sum = digits.reduce((acc, d) => acc + Number(d), 0);
      const bands = ["Low", "Medium", "High", "Critical"];
      return bands[sum % bands.length];
    };
    const cvssFromSeverity = (s) =>
      s === "Critical" ? 9.4 : s === "High" ? 8.1 : s === "Medium" ? 6.0 : 4.0;
    const parseYear = (d) => {
      if (!d) return "Unknown";
      const y = new Date(d).getFullYear();
      return Number.isFinite(y) ? String(y) : "Unknown";
    };
    return blogs
      .filter((b) => isCveLike(b.title))
      .map((b) => {
        const idMatch = b.title.match(/CVE[-–](\d{4})[-–]?(\d+)/i);
        const id = idMatch ? `CVE-${idMatch[1]}-${idMatch[2]}` : b.slug.toUpperCase();
        const sev = severityFromId(id);
        return {
          id,
          title: b.title,
          severity: sev,
          cvss: cvssFromSeverity(sev),
          year: parseYear(b.date),
          kev: false,
          summary: b.excerpt,
          href: b.href || `/blog/${b.slug}`,
        };
      });
  }, []);

  const ActiveCmp = GAMES[gameMode].Cmp;

  return (
    <div className="games-app">
      <div className="games-toolbar">
        <div className="cve-game-toggle" role="tablist" aria-label="Security games">
          {Object.entries(GAMES).map(([key, g]) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={gameMode === key}
              className={gameMode === key ? "active" : ""}
              onClick={() => setGameMode(key)}
            >
              {g.label}
            </button>
          ))}
        </div>
        <div className="cve-difficulty-toggle" role="group" aria-label="Difficulty">
          <span className="difficulty-label">Difficulty</span>
          {["easy", "standard", "hard"].map((d) => (
            <button
              key={d}
              type="button"
              className={difficulty === d ? "active" : ""}
              onClick={() => setDifficulty(d)}
            >
              {d}
            </button>
          ))}
        </div>
      </div>
      <div className="cve-hunt-shell">
        <ActiveCmp entries={cveEntries} difficulty={difficulty} />
      </div>
    </div>
  );
}
