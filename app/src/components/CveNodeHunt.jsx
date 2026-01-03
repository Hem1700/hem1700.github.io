import { useEffect, useMemo, useRef, useState } from "react";

const GRID_SIZE = 5;
const DIFFICULTY_SETTINGS = {
  easy: { scanLimit: 3, hintThresholds: [1, 3] },
  standard: { scanLimit: 2, hintThresholds: [2, 4] },
  hard: { scanLimit: 1, hintThresholds: [3, 5] },
};
const COLUMNS = Array.from({ length: GRID_SIZE }, (_, idx) => String.fromCharCode(65 + idx));
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

const makeGrid = () => {
  const cells = {};
  for (let row = 1; row <= GRID_SIZE; row += 1) {
    for (let col = 0; col < GRID_SIZE; col += 1) {
      const key = `${COLUMNS[col]}${row}`;
      cells[key] = { status: "unknown", heat: "" };
    }
  }
  return cells;
};

const pickKeyword = (text) => {
  const cleaned = (text || "").toLowerCase().replace(/[^a-z0-9\s]/g, " ");
  const words = cleaned.split(/\s+/).filter(Boolean);
  const keyword = words.find((word) => word.length > 4 && !stopWords.has(word));
  return keyword ? keyword.toUpperCase() : "SIGNAL";
};

const createTarget = (entries) => {
  const entry = entries.length
    ? entries[Math.floor(Math.random() * entries.length)]
    : {
      id: "UNKNOWN",
      title: "Unknown intruder",
      year: "Unknown",
      severity: "Unknown",
      summary: "",
      href: "",
    };
  const colIndex = Math.floor(Math.random() * GRID_SIZE);
  const rowIndex = Math.floor(Math.random() * GRID_SIZE);
  return {
    entry,
    colIndex,
    rowIndex,
    key: `${COLUMNS[colIndex]}${rowIndex + 1}`,
  };
};

const formatHeat = (distance) => {
  if (distance === 0) return { label: "direct", text: "Direct signal. Confirm with ISOLATE." };
  if (distance <= 1) return { label: "hot", text: "Signal spike detected." };
  if (distance <= 2) return { label: "warm", text: "Signal is warm." };
  if (distance <= 3) return { label: "cool", text: "Signal is faint." };
  return { label: "cold", text: "Signal cold." };
};

const initialLog = (scanLimit) => [
  { type: "system", text: "NODE HUNT // Threat hunting console online." },
  { type: "system", text: "Type HELP to see commands." },
  { type: "info", text: `Grid ${GRID_SIZE}x${GRID_SIZE} loaded. Scan budget: ${scanLimit}.` },
];

export default function CveNodeHunt({ entries = [], difficulty = "standard" }) {
  const settings = DIFFICULTY_SETTINGS[difficulty] || DIFFICULTY_SETTINGS.standard;
  const [grid, setGrid] = useState(() => makeGrid());
  const [target, setTarget] = useState(() => createTarget(entries));
  const [log, setLog] = useState(() => initialLog(settings.scanLimit));
  const [input, setInput] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [hintLevel, setHintLevel] = useState(0);
  const [scansLeft, setScansLeft] = useState(settings.scanLimit);
  const [status, setStatus] = useState("active");
  const logRef = useRef(null);

  const intel = useMemo(() => ({
    year: target.entry?.year || "Unknown",
    severity: target.entry?.severity || "Unknown",
    keyword: pickKeyword(`${target.entry?.title || ""} ${target.entry?.summary || ""}`),
  }), [target]);

  useEffect(() => {
    if (!logRef.current) return;
    logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [log]);

  const appendLog = (text, type = "info") => {
    setLog((prev) => [...prev, { type, text }]);
  };

  const resetGame = () => {
    setGrid(makeGrid());
    setTarget(createTarget(entries));
    setAttempts(0);
    setHintLevel(0);
    setScansLeft(settings.scanLimit);
    setStatus("active");
    setLog([...initialLog(settings.scanLimit), { type: "system", text: "New hunt initialized." }]);
  };

  useEffect(() => {
    resetGame();
  }, [difficulty]);

  const parseCoord = (raw) => {
    const match = raw?.toUpperCase().match(/^([A-Z])(\d+)$/);
    if (!match) return null;
    const col = match[1];
    const row = Number(match[2]);
    const colIndex = COLUMNS.indexOf(col);
    if (colIndex === -1 || !Number.isFinite(row) || row < 1 || row > GRID_SIZE) return null;
    return { key: `${col}${row}`, colIndex, rowIndex: row - 1 };
  };

  const revealHint = (nextAttempts) => {
    const [firstHint, secondHint] = settings.hintThresholds;
    if (hintLevel === 0 && nextAttempts >= firstHint) {
      setHintLevel(1);
      appendLog(`Hint: Signal spikes in row ${target.rowIndex + 1}.`, "hint");
    } else if (hintLevel === 1 && nextAttempts >= secondHint) {
      setHintLevel(2);
      appendLog(`Hint: Signal concentrates in column ${COLUMNS[target.colIndex]}.`, "hint");
    }
  };

  const runScan = () => {
    if (scansLeft <= 0) {
      appendLog("Scan budget depleted. Use PING or TRACE.", "warning");
      return;
    }
    setScansLeft((prev) => Math.max(prev - 1, 0));
    const vertical = target.rowIndex < GRID_SIZE / 2 ? "NORTH" : "SOUTH";
    const horizontal = target.colIndex < GRID_SIZE / 2 ? "WEST" : "EAST";
    appendLog(`Scan result: signal cluster in ${vertical}-${horizontal} quadrant.`, "info");
  };

  const runPing = (coord) => {
    const dist = Math.abs(coord.colIndex - target.colIndex) + Math.abs(coord.rowIndex - target.rowIndex);
    const heat = formatHeat(dist);
    setGrid((prev) => ({
      ...prev,
      [coord.key]: { status: "ping", heat: heat.label },
    }));
    appendLog(`Ping ${coord.key}: ${heat.text}`, "info");
  };

  const runTrace = (coord) => {
    const vertical = target.rowIndex === coord.rowIndex
      ? "SAME ROW"
      : target.rowIndex < coord.rowIndex
        ? "NORTH"
        : "SOUTH";
    const horizontal = target.colIndex === coord.colIndex
      ? "SAME COLUMN"
      : target.colIndex < coord.colIndex
        ? "WEST"
        : "EAST";
    const direction = vertical === "SAME ROW" && horizontal === "SAME COLUMN"
      ? "LOCK POSSIBLE"
      : vertical === "SAME ROW"
        ? horizontal
        : horizontal === "SAME COLUMN"
          ? vertical
          : `${vertical}-${horizontal}`;
    setGrid((prev) => ({
      ...prev,
      [coord.key]: { status: "trace", heat: "" },
    }));
    appendLog(`Trace ${coord.key}: target heading ${direction}.`, "info");
  };

  const runIsolate = (coord) => {
    const nextAttempts = attempts + 1;
    setAttempts(nextAttempts);
    if (coord.key === target.key) {
      setGrid((prev) => ({
        ...prev,
        [coord.key]: { status: "hit", heat: "hot" },
      }));
      setStatus("found");
      appendLog(`Target isolated at ${coord.key}.`, "success");
      appendLog(`Identity confirmed: ${target.entry?.id || "Unknown"}.`, "success");
      return;
    }
    setGrid((prev) => ({
      ...prev,
      [coord.key]: { status: "miss", heat: "cold" },
    }));
    appendLog(`Isolate ${coord.key}: no match.`, "warning");
    revealHint(nextAttempts);
  };

  const runCommand = (raw) => {
    const trimmed = raw.trim();
    if (!trimmed) return;
    appendLog(`> ${trimmed}`, "command");
    const [cmdRaw, argRaw] = trimmed.split(/\s+/);
    const cmd = cmdRaw.toLowerCase();
    const arg = argRaw || "";

    if (status === "found" && !["restart", "help", "clear", "open"].includes(cmd)) {
      appendLog("Case closed. Type RESTART to hunt again.", "system");
      return;
    }

    if (cmd === "help") {
      appendLog("Commands: SCAN, PING A1, TRACE B2, ISOLATE C3, OPEN, CLEAR, RESTART.", "system");
      return;
    }
    if (cmd === "scan") {
      runScan();
      return;
    }
    if (cmd === "clear") {
      setLog([...initialLog(settings.scanLimit), { type: "system", text: "Console cleared." }]);
      return;
    }
    if (cmd === "restart") {
      resetGame();
      return;
    }
    if (cmd === "open") {
      if (status !== "found" || !target.entry?.href) {
        appendLog("No report unlocked yet.", "warning");
        return;
      }
      window.open(target.entry.href, "_blank", "noreferrer");
      appendLog("Opening report in new tab.", "system");
      return;
    }

    if (["ping", "trace", "isolate"].includes(cmd)) {
      const coord = parseCoord(arg);
      if (!coord) {
        appendLog("Invalid coordinate. Example: PING B2.", "error");
        return;
      }
      if (cmd === "ping") runPing(coord);
      if (cmd === "trace") runTrace(coord);
      if (cmd === "isolate") runIsolate(coord);
      return;
    }

    appendLog("Unknown command. Type HELP.", "error");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    runCommand(input);
    setInput("");
  };

  const renderCellSymbol = (cell) => {
    if (cell.status === "hit") return "@";
    if (cell.status === "miss") return "x";
    if (cell.status === "trace") return "+";
    if (cell.status === "ping") return "o";
    return ".";
  };

  return (
    <div className="hunt-layout">
      <div className={`hunt-terminal ${status === "found" ? "win" : ""}`}>
        <div className="terminal-header">
          <div>
            <div className="terminal-title">NODE HUNT</div>
            <div className="terminal-subtitle">Threat hunting simulation</div>
          </div>
          <div className={`terminal-status ${status}`}>{status === "found" ? "SECURED" : "ACTIVE"}</div>
        </div>
        <div className="hunt-onboarding">
          <div className="onboarding-title">How to play</div>
          <div className="onboarding-steps">
            <div>1. SCAN ({settings.scanLimit}x) to get the quadrant.</div>
            <div>2. PING A1 for heat distance.</div>
            <div>3. TRACE B2 for direction.</div>
            <div>4. ISOLATE when you are confident.</div>
          </div>
          <div className="onboarding-hint">Try: SCAN, PING B2, TRACE C4, ISOLATE D5.</div>
        </div>
        <div className="terminal-log" ref={logRef}>
          {log.map((line, idx) => (
            <div key={`${line.type}-${idx}`} className={`terminal-line ${line.type}`}>
              {line.text}
            </div>
          ))}
        </div>
        <form className="terminal-input" onSubmit={handleSubmit}>
          <span className="terminal-prompt">nodehunt&gt;</span>
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Type a command (HELP)"
            aria-label="Terminal command"
          />
          <button className="pill" type="submit">
            Run
          </button>
        </form>
      </div>
      <div className={`hunt-board ${status === "found" ? "win" : ""}`}>
        <div className="hunt-intel">
          <div className="intel-title">Signal fingerprint</div>
          <div className="intel-row">
            <span>Year</span>
            <span>{intel.year}</span>
          </div>
          <div className="intel-row">
            <span>Severity</span>
            <span>{intel.severity}</span>
          </div>
          <div className="intel-row">
            <span>Codename</span>
            <span>{intel.keyword}</span>
          </div>
          <div className="intel-row">
            <span>Attempts</span>
            <span>{attempts}</span>
          </div>
          <div className="intel-row">
            <span>Scans left</span>
            <span>{scansLeft}</span>
          </div>
        </div>
        <div className="hunt-grid">
          <div className="grid-row">
            <div className="grid-cell header" />
            {COLUMNS.map((col) => (
              <div key={col} className="grid-cell header">
                {col}
              </div>
            ))}
          </div>
          {Array.from({ length: GRID_SIZE }).map((_, rowIdx) => (
            <div key={`row-${rowIdx}`} className="grid-row">
              <div className="grid-cell header">
                {rowIdx + 1}
              </div>
              {COLUMNS.map((col) => {
                const key = `${col}${rowIdx + 1}`;
                const cell = grid[key];
                const heatClass = cell.heat ? `heat-${cell.heat}` : "";
                return (
                  <div key={key} className={`grid-cell cell ${cell.status} ${heatClass}`}>
                    {renderCellSymbol(cell)}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="hunt-legend">
          <div><span className="legend-symbol">.</span> unknown</div>
          <div><span className="legend-symbol">o</span> ping</div>
          <div><span className="legend-symbol">+</span> trace</div>
          <div><span className="legend-symbol">x</span> miss</div>
          <div><span className="legend-symbol">@</span> capture</div>
        </div>
        {status === "found" && (
          <div className="hunt-result">
            <div className="hunt-result-title">Intruder identified</div>
            <div className="hunt-result-id">{target.entry?.id || "Unknown"}</div>
            <p className="hunt-result-text">{target.entry?.title}</p>
            {target.entry?.href && (
              <a className="button primary" href={target.entry.href} target="_blank" rel="noreferrer">
                Open report
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
