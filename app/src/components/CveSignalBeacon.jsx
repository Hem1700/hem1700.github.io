import { useEffect, useMemo, useRef, useState } from "react";

const ANGLE_STEP = 15;
const RINGS = [1, 2, 3];
const stopWords = new Set([
  "reverse",
  "engineering",
  "from",
  "with",
  "into",
  "watchguard",
  "firebox",
  "kernel",
  "linux",
  "audit",
  "transient",
  "scheduler",
  "attacks",
  "understanding",
  "cve",
  "blog",
  "server",
  "tiny",
  "fake",
]);

const pickKeyword = (text) => {
  const cleaned = (text || "").toLowerCase().replace(/[^a-z0-9\s]/g, " ");
  const words = cleaned.split(/\s+/).filter(Boolean);
  const keyword = words.find((word) => word.length > 4 && !stopWords.has(word));
  return keyword ? keyword.toUpperCase() : "SIGNAL";
};

const pickEntry = (entries) => {
  if (!entries.length) {
    return {
      id: "UNKNOWN",
      title: "Unknown signal",
      year: "Unknown",
      severity: "Unknown",
      summary: "",
      href: "",
    };
  }
  return entries[Math.floor(Math.random() * entries.length)];
};

const randomAngle = () => Math.floor(Math.random() * (360 / ANGLE_STEP)) * ANGLE_STEP;

const createTarget = (entries) => ({
  entry: pickEntry(entries),
  angle: randomAngle(),
  ring: RINGS[Math.floor(Math.random() * RINGS.length)],
});

const initialLog = () => [
  { type: "system", text: "SIGNAL BEACON // Radar deck online." },
  { type: "system", text: "Rotate the beacon, pulse the signal, then lock the band." },
];

const angleDiff = (current, target) => {
  const diff = Math.abs(current - target) % 360;
  return diff > 180 ? 360 - diff : diff;
};

const angleDirection = (current, target) => {
  const diff = (target - current + 360) % 360;
  if (diff === 0) return "aligned";
  return diff <= 180 ? "clockwise" : "counterclockwise";
};

const formatHeat = (diff, ringDiff) => {
  if (diff <= 8 && ringDiff === 0) return { label: "direct", text: "Direct lock possible." };
  if (diff <= 20 && ringDiff <= 1) return { label: "hot", text: "Signal spike. Stay on this arc." };
  if (diff <= 40 && ringDiff <= 1) return { label: "warm", text: "Signal warm. Close the ring." };
  if (diff <= 70) return { label: "cool", text: "Signal faint. Recalibrate." };
  return { label: "cold", text: "Signal cold. Sweep wider." };
};

export default function CveSignalBeacon({ entries = [] }) {
  const [target, setTarget] = useState(() => createTarget(entries));
  const [angle, setAngle] = useState(() => randomAngle());
  const [ring, setRing] = useState(2);
  const [attempts, setAttempts] = useState(0);
  const [status, setStatus] = useState("active");
  const [log, setLog] = useState(() => initialLog());
  const logRef = useRef(null);

  const intel = useMemo(
    () => ({
      year: target.entry?.year || "Unknown",
      severity: target.entry?.severity || "Unknown",
      keyword: pickKeyword(`${target.entry?.title || ""} ${target.entry?.summary || ""}`),
    }),
    [target]
  );

  useEffect(() => {
    if (!logRef.current) return;
    logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [log]);

  useEffect(() => {
    if (!entries.length) return;
    setTarget(createTarget(entries));
    setAngle(randomAngle());
    setRing(2);
    setAttempts(0);
    setStatus("active");
    setLog([...initialLog(), { type: "system", text: "New signal signature loaded." }]);
  }, [entries]);

  const appendLog = (text, type = "info") => {
    setLog((prev) => [...prev, { type, text }]);
  };

  const rotate = (delta) => {
    setAngle((prev) => (prev + delta + 360) % 360);
  };

  const shiftRing = (delta) => {
    setRing((prev) => {
      const next = prev + delta;
      if (next < RINGS[0]) return RINGS[RINGS.length - 1];
      if (next > RINGS[RINGS.length - 1]) return RINGS[0];
      return next;
    });
  };

  const pulse = () => {
    if (status === "found") {
      appendLog("Signal already locked. Start a new run.", "system");
      return;
    }
    const diff = angleDiff(angle, target.angle);
    const ringDiff = Math.abs(ring - target.ring);
    const heat = formatHeat(diff, ringDiff);
    const direction = angleDirection(angle, target.angle);
    const nextAttempts = attempts + 1;
    setAttempts(nextAttempts);
    appendLog(`Pulse: ${heat.text}`, "info");
    if (direction !== "aligned") {
      appendLog(`Adjust ${direction} and check ring ${ring}.`, "hint");
    }
  };

  const lockSignal = () => {
    if (status === "found") return;
    const diff = angleDiff(angle, target.angle);
    const ringDiff = Math.abs(ring - target.ring);
    const nextAttempts = attempts + 1;
    setAttempts(nextAttempts);
    if (diff <= 8 && ringDiff === 0) {
      setStatus("found");
      appendLog("Signal locked. Target isolated.", "success");
      appendLog(`Identity confirmed: ${target.entry?.id || "Unknown"}.`, "success");
      return;
    }
    appendLog("Lock failed. Signal slipped.", "warning");
    if (nextAttempts >= 3) {
      appendLog(`Hint: Target ring is ${target.ring}.`, "hint");
    }
  };

  const resetGame = () => {
    setTarget(createTarget(entries));
    setAngle(randomAngle());
    setRing(2);
    setAttempts(0);
    setStatus("active");
    setLog([...initialLog(), { type: "system", text: "Beacon reset. New target acquired." }]);
  };

  return (
    <div className="beacon-layout">
      <div className="beacon-panel">
        <div className="beacon-header">
          <div>
            <div className="beacon-title">Signal Beacon</div>
            <div className="beacon-subtitle">Rotate the beam, pulse the arc, then lock on.</div>
          </div>
          <div className={`beacon-status ${status}`}>{status === "found" ? "LOCKED" : "TRACKING"}</div>
        </div>
        <div className="beacon-intel">
          <div className="beacon-intel-row">
            <span>Year</span>
            <span>{intel.year}</span>
          </div>
          <div className="beacon-intel-row">
            <span>Severity</span>
            <span>{intel.severity}</span>
          </div>
          <div className="beacon-intel-row">
            <span>Codename</span>
            <span>{intel.keyword}</span>
          </div>
          <div className="beacon-intel-row">
            <span>Actions</span>
            <span>{attempts}</span>
          </div>
        </div>
        <div className="beacon-controls">
          <div className="beacon-control-group">
            <div className="beacon-control-label">Heading</div>
            <div className="beacon-control-buttons">
              <button type="button" onClick={() => rotate(-ANGLE_STEP)} aria-label="Rotate left">
                &lt;
              </button>
              <div className="beacon-control-readout">{angle}deg</div>
              <button type="button" onClick={() => rotate(ANGLE_STEP)} aria-label="Rotate right">
                &gt;
              </button>
            </div>
          </div>
          <div className="beacon-control-group">
            <div className="beacon-control-label">Range</div>
            <div className="beacon-control-buttons">
              <button type="button" onClick={() => shiftRing(-1)} aria-label="Range down">
                -
              </button>
              <div className="beacon-control-readout">R{ring}</div>
              <button type="button" onClick={() => shiftRing(1)} aria-label="Range up">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="beacon-actions">
          <button className="pill" type="button" onClick={pulse}>
            Pulse
          </button>
          <button className="pill impact" type="button" onClick={lockSignal}>
            Lock
          </button>
          <button className="pill" type="button" onClick={resetGame}>
            New signal
          </button>
        </div>
        <div className="beacon-log" ref={logRef}>
          {log.map((line, idx) => (
            <div key={`${line.type}-${idx}`} className={`beacon-line ${line.type}`}>
              {line.text}
            </div>
          ))}
        </div>
        {status === "found" && (
          <div className="beacon-result">
            <div className="beacon-result-title">Signal captured</div>
            <div className="beacon-result-id">{target.entry?.id || "Unknown"}</div>
            <div className="beacon-result-text">{target.entry?.title}</div>
            {target.entry?.href && (
              <a className="button primary" href={target.entry.href} target="_blank" rel="noreferrer">
                Open report
              </a>
            )}
          </div>
        )}
      </div>
      <div className="beacon-stage">
        <div className="beacon-platform">
          <div className={`beacon-ring ring-1 ${ring === 1 ? "active" : ""}`} />
          <div className={`beacon-ring ring-2 ${ring === 2 ? "active" : ""}`} />
          <div className={`beacon-ring ring-3 ${ring === 3 ? "active" : ""}`} />
          <div className="beacon-beam" style={{ "--beam-rot": `${angle}deg` }} />
          <div className="beacon-needle" style={{ "--needle-rot": `${angle}deg` }} />
          <div className="beacon-core" />
        </div>
      </div>
    </div>
  );
}
