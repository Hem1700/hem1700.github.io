import { useEffect, useState } from "react";

const BOOT_LINES = [
  { c: "ok",   t: "[  OK  ] Reached target Boot Complete." },
  { c: "info", t: "[ INFO ] HEM-OS 1.7.0 — kernel 6.5.0-hardened" },
  { c: "ok",   t: "[  OK  ] Mounted /home/hem (43 pentests, 18 posts, 12 certs)" },
  { c: "ok",   t: "[  OK  ] Started Curiosity Daemon (curiosity-d)" },
  { c: "info", t: "[ INFO ] Loading vulnerabilities table … 9 entries" },
  { c: "warn", t: "[ WARN ] AMD-TSA microcode advisory found in queue" },
  { c: "ok",   t: "[  OK  ] Started Display Manager" },
  { c: "em",   t: "Welcome to HEM-OS." },
];

export default function Boot({ onDone }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i += 1;
      setN(i);
      if (i >= BOOT_LINES.length) {
        clearInterval(t);
        setTimeout(onDone, 600);
      }
    }, 220);
    return () => clearInterval(t);
  }, [onDone]);

  const pct = Math.min(100, (n / BOOT_LINES.length) * 100);

  return (
    <div className="boot">
      <div className="logo">HEM<span>-OS</span></div>
      <div className="lines">
        {BOOT_LINES.slice(0, n).map((l, i) => (
          <div key={i} className={l.c}>{l.t}</div>
        ))}
        {n < BOOT_LINES.length && <span className="cursor" />}
      </div>
      <div className="progress">
        <div className="fill" style={{ width: pct + "%" }} />
      </div>
    </div>
  );
}
