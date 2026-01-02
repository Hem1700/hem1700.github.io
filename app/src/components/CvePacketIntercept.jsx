import { useEffect, useMemo, useRef, useState } from "react";

const LANES = ["Alpha", "Bravo", "Charlie"];

const pickEntry = (entries) => {
  if (!entries.length) {
    return {
      id: "UNKNOWN",
      title: "Unknown packet stream",
      year: "Unknown",
      severity: "Unknown",
      summary: "",
      href: "",
    };
  }
  return entries[Math.floor(Math.random() * entries.length)];
};

const signatureFromEntry = (entry) => {
  const digits = (entry?.id || entry?.title || "").match(/\d/g) || [];
  const sum = digits.reduce((acc, d) => acc + Number(d), 0);
  return Number.isFinite(sum) ? sum % 10 : Math.floor(Math.random() * 10);
};

const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const buildRound = (signature) => {
  const maliciousLane = Math.floor(Math.random() * LANES.length);
  const packets = LANES.map((lane, idx) => {
    const checksum = idx === maliciousLane ? signature : randomBetween(0, 9);
    const risk = idx === maliciousLane ? randomBetween(70, 96) : randomBetween(25, 75);
    return {
      lane,
      checksum: checksum === signature && idx !== maliciousLane ? (checksum + 1) % 10 : checksum,
      latency: randomBetween(18, 90),
      burst: randomBetween(2, 9),
      risk,
    };
  });
  return { packets, maliciousLane };
};

const initialLog = () => [
  { type: "system", text: "PACKET INTERCEPT // Traffic control engaged." },
  { type: "system", text: "Inspect lanes, then intercept the hostile payload." },
];

export default function CvePacketIntercept({ entries = [] }) {
  const [entry, setEntry] = useState(() => pickEntry(entries));
  const [signature, setSignature] = useState(() => signatureFromEntry(entry));
  const [round, setRound] = useState(() => buildRound(signature));
  const [inspected, setInspected] = useState(() => LANES.map(() => false));
  const [scansLeft, setScansLeft] = useState(2);
  const [captures, setCaptures] = useState(0);
  const [misses, setMisses] = useState(0);
  const [status, setStatus] = useState("active");
  const [log, setLog] = useState(() => initialLog());
  const [lastResult, setLastResult] = useState(null);
  const logRef = useRef(null);

  const intel = useMemo(
    () => ({
      year: entry?.year || "Unknown",
      severity: entry?.severity || "Unknown",
      signature,
    }),
    [entry, signature]
  );

  useEffect(() => {
    if (!logRef.current) return;
    logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [log]);

  useEffect(() => {
    if (!entries.length) return;
    const nextEntry = pickEntry(entries);
    const nextSignature = signatureFromEntry(nextEntry);
    setEntry(nextEntry);
    setSignature(nextSignature);
    setRound(buildRound(nextSignature));
    setInspected(LANES.map(() => false));
    setScansLeft(2);
    setCaptures(0);
    setMisses(0);
    setLastResult(null);
    setStatus("active");
    setLog([...initialLog(), { type: "system", text: "New traffic signature loaded." }]);
  }, [entries]);

  const appendLog = (text, type = "info") => {
    setLog((prev) => [...prev, { type, text }]);
  };

  const resetRound = () => {
    setRound(buildRound(signature));
    setInspected(LANES.map(() => false));
    setScansLeft(2);
    setLastResult(null);
  };

  const resetCase = () => {
    const nextEntry = pickEntry(entries);
    const nextSignature = signatureFromEntry(nextEntry);
    setEntry(nextEntry);
    setSignature(nextSignature);
    setRound(buildRound(nextSignature));
    setInspected(LANES.map(() => false));
    setScansLeft(2);
    setCaptures(0);
    setMisses(0);
    setLastResult(null);
    setStatus("active");
    setLog([...initialLog(), { type: "system", text: "New case file opened." }]);
  };

  const handleInspect = (laneIndex) => {
    if (status === "found") return;
    if (inspected[laneIndex]) return;
    if (scansLeft <= 0) {
      appendLog("Scan budget exhausted. Intercept to continue.", "warning");
      return;
    }
    setInspected((prev) => prev.map((val, idx) => (idx === laneIndex ? true : val)));
    setScansLeft((prev) => prev - 1);
    appendLog(`Scan lane ${LANES[laneIndex].toUpperCase()}: checksum surfaced.`, "info");
  };

  const handleIntercept = (laneIndex) => {
    if (status === "found") return;
    const hit = laneIndex === round.maliciousLane;
    setLastResult({ lane: laneIndex, hit });
    if (hit) {
      const nextCaptures = captures + 1;
      setCaptures(nextCaptures);
      appendLog(`Intercept success on ${LANES[laneIndex].toUpperCase()}.`, "success");
      if (nextCaptures >= 3) {
        setStatus("found");
        appendLog("Threat chain neutralized.", "success");
        return;
      }
    } else {
      setMisses((prev) => prev + 1);
      appendLog(`False positive on ${LANES[laneIndex].toUpperCase()}.`, "warning");
    }
    resetRound();
  };

  return (
    <div className="intercept-layout">
      <div className="intercept-panel">
        <div className="intercept-header">
          <div>
            <div className="intercept-title">Packet Intercept</div>
            <div className="intercept-subtitle">Scan lanes, then trigger quarantine.</div>
          </div>
          <div className={`intercept-status ${status}`}>{status === "found" ? "SECURED" : "ACTIVE"}</div>
        </div>
        <div className="intercept-intel">
          <div className="intercept-intel-row">
            <span>Signature</span>
            <span>{intel.signature}</span>
          </div>
          <div className="intercept-intel-row">
            <span>Year</span>
            <span>{intel.year}</span>
          </div>
          <div className="intercept-intel-row">
            <span>Severity</span>
            <span>{intel.severity}</span>
          </div>
          <div className="intercept-intel-row">
            <span>Captures</span>
            <span>{captures}/3</span>
          </div>
          <div className="intercept-intel-row">
            <span>Misses</span>
            <span>{misses}</span>
          </div>
          <div className="intercept-intel-row">
            <span>Scans left</span>
            <span>{scansLeft}</span>
          </div>
        </div>
        <div className="intercept-hint">Match the checksum to the signature. Scan reveals lane data.</div>
        <div className="intercept-actions">
          <button className="pill" type="button" onClick={resetRound}>
            New packet
          </button>
          <button className="pill" type="button" onClick={resetCase}>
            New case
          </button>
          {status === "found" && entry?.href && (
            <a className="button primary" href={entry.href} target="_blank" rel="noreferrer">
              Open report
            </a>
          )}
        </div>
        <div className="intercept-log" ref={logRef}>
          {log.map((line, idx) => (
            <div key={`${line.type}-${idx}`} className={`intercept-line ${line.type}`}>
              {line.text}
            </div>
          ))}
        </div>
        {status === "found" && (
          <div className="intercept-result">
            <div className="intercept-result-title">Threat captured</div>
            <div className="intercept-result-id">{entry?.id || "Unknown"}</div>
            <div className="intercept-result-text">{entry?.title}</div>
          </div>
        )}
      </div>
      <div className="intercept-stage">
        <div className="lane-grid">
          {round.packets.map((packet, idx) => {
            const inspectedLane = inspected[idx];
            const highlight = lastResult?.lane === idx ? (lastResult.hit ? "hit" : "miss") : "";
            return (
              <div key={packet.lane} className={`lane-card ${inspectedLane ? "inspected" : ""} ${highlight}`}>
                <div className="lane-header">
                  <div className="lane-title">{packet.lane}</div>
                  <div className="lane-risk">
                    <span>Risk</span>
                    <span>{packet.risk}</span>
                  </div>
                </div>
                <div className="lane-stream">
                  {Array.from({ length: 3 }).map((_, flowIdx) => (
                    <span
                      key={`${packet.lane}-flow-${flowIdx}`}
                      className="lane-packet"
                      style={{ animationDelay: `${flowIdx * 0.6}s` }}
                    />
                  ))}
                </div>
                <div className="lane-body">
                  {inspectedLane ? (
                    <div className="lane-metrics">
                      <div>checksum: {packet.checksum}</div>
                      <div>latency: {packet.latency}ms</div>
                      <div>burst: {packet.burst}</div>
                    </div>
                  ) : (
                    <div className="lane-encrypted">Encrypted payload</div>
                  )}
                </div>
                <div className="lane-actions">
                  <button type="button" onClick={() => handleInspect(idx)}>
                    Scan
                  </button>
                  <button type="button" onClick={() => handleIntercept(idx)}>
                    Intercept
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
