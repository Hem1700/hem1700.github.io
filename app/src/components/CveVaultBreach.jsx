import { useEffect, useState } from "react";

const SEGMENTS = 8;
const GLYPHS = ["A", "B", "C", "D", "E", "F", "G", "H"];
const RING_SIZES = [280, 220, 160];

const pickEntry = (entries) => {
  if (!entries.length) {
    return {
      id: "UNKNOWN",
      title: "Unknown case file",
      year: "Unknown",
      severity: "Unknown",
      summary: "",
      href: "",
    };
  }
  return entries[Math.floor(Math.random() * entries.length)];
};

const buildVault = (entries) => {
  const entry = pickEntry(entries);
  const targetPositions = Array.from({ length: 3 }, () => Math.floor(Math.random() * SEGMENTS));
  let positions = Array.from({ length: 3 }, () => Math.floor(Math.random() * SEGMENTS));
  if (positions.every((pos, idx) => pos === targetPositions[idx])) {
    positions = positions.map((pos) => (pos + 1) % SEGMENTS);
  }
  return { entry, targetPositions, positions };
};

export default function CveVaultBreach({ entries = [] }) {
  const [vault, setVault] = useState(() => buildVault(entries));
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    if (!entries.length) return;
    setVault(buildVault(entries));
    setMoves(0);
  }, [entries]);

  const step = 360 / SEGMENTS;
  const { entry, targetPositions, positions } = vault;
  const unlocked = positions.every((pos, idx) => pos === targetPositions[idx]);
  const cipher = targetPositions.map((pos) => GLYPHS[pos]).join(" / ");
  const alignment = positions.map((pos) => GLYPHS[pos]).join(" - ");
  const progress = positions.reduce(
    (acc, pos, idx) => acc + (pos === targetPositions[idx] ? 1 : 0),
    0
  );

  const rotateRing = (index, delta) => {
    setVault((prev) => {
      const nextPositions = prev.positions.map((pos, idx) => {
        if (idx !== index) return pos;
        return (pos + delta + SEGMENTS) % SEGMENTS;
      });
      return { ...prev, positions: nextPositions };
    });
    setMoves((prev) => prev + 1);
  };

  const resetVault = () => {
    setVault(buildVault(entries));
    setMoves(0);
  };

  return (
    <div className="vault-layout">
      <div className="vault-panel">
        <div className="vault-header">
          <div>
            <div className="vault-title">Vault Breach</div>
            <div className="vault-subtitle">Align the glyphs to unlock the case file.</div>
          </div>
          <div className={`vault-status ${unlocked ? "unlocked" : ""}`}>
            {unlocked ? "UNLOCKED" : "SEALED"}
          </div>
        </div>
        <div className="vault-brief">
          <div className="vault-brief-row">
            <span>Cipher sequence</span>
            <span>{cipher}</span>
          </div>
          <div className="vault-brief-row">
            <span>Active alignment</span>
            <span>{alignment}</span>
          </div>
          <div className="vault-brief-row">
            <span>Progress</span>
            <span>{progress}/3</span>
          </div>
          <div className="vault-brief-row">
            <span>Moves</span>
            <span>{moves}</span>
          </div>
        </div>
        <div className="vault-controls">
          {positions.map((pos, idx) => (
            <div key={`ring-${idx}`} className="vault-control">
              <div className="vault-control-label">Ring {idx + 1}</div>
              <div className="vault-control-buttons">
                <button
                  type="button"
                  onClick={() => rotateRing(idx, -1)}
                  aria-label={`Rotate ring ${idx + 1} left`}
                >
                  ⟲
                </button>
                <div className="vault-control-readout">{GLYPHS[pos]}</div>
                <button
                  type="button"
                  onClick={() => rotateRing(idx, 1)}
                  aria-label={`Rotate ring ${idx + 1} right`}
                >
                  ⟳
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="vault-actions">
          <button className="pill" type="button" onClick={resetVault}>
            New vault
          </button>
          {unlocked && entry?.href && (
            <a className="button primary" href={entry.href} target="_blank" rel="noreferrer">
              Open report
            </a>
          )}
        </div>
        {unlocked && (
          <div className="vault-result">
            <div className="vault-result-title">Case unlocked</div>
            <div className="vault-result-id">{entry?.id || "Unknown"}</div>
            <div className="vault-result-text">{entry?.title}</div>
          </div>
        )}
      </div>
      <div className="vault-stage">
        <div className="vault-lock">
          <div className="vault-notch">
            <span>Breach window</span>
          </div>
          <div className="vault-rings">
            {positions.map((pos, idx) => (
              <div
                key={`ring-visual-${idx}`}
                className={`vault-ring ring-${idx + 1}`}
                style={{
                  "--size": `${RING_SIZES[idx]}px`,
                  "--rot": `${-pos * step}deg`,
                }}
              >
                <div className="ring-track">
                  {GLYPHS.map((glyph, glyphIdx) => (
                    <span
                      key={`glyph-${idx}-${glyphIdx}`}
                      className="ring-glyph"
                      style={{ "--angle": `${glyphIdx * step}deg` }}
                    >
                      {glyph}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="vault-core" />
        </div>
      </div>
    </div>
  );
}
