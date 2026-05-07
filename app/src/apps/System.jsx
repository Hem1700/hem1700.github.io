import { useEffect, useState } from "react";
import { now } from "../data/content";

export default function System() {
  const [t, setT] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setT((x) => x + 1), 1500);
    return () => clearInterval(i);
  }, []);

  const cur = (n, off) =>
    Math.max(5, Math.min(95, n + Math.sin((t + off) * 0.6) * 8));

  const bars = [
    { label: "cpu / curiosity-d", base: 72, off: 0 },
    { label: "mem / writing-cache", base: 58, off: 1 },
    { label: "net / signal-strength", base: 80, off: 2 },
    { label: "focus / shipping", base: 64, off: 3 },
  ];

  return (
    <div className="asy">
      <h1>system_monitor</h1>
      <div className="sb">// hem@hemos · uptime: stable since 2018</div>
      <div className="gg">
        {bars.map((b) => {
          const v = cur(b.base, b.off);
          return (
            <div key={b.label} className="gu">
              <div className="l">
                <span>{b.label}</span>
                <span className="v">{v.toFixed(0)}%</span>
              </div>
              <div className="br">
                <div className="f" style={{ width: v + "%" }} />
              </div>
            </div>
          );
        })}
      </div>
      <h2>// processes / now</h2>
      <ul className="nl">
        {now.map((n, i) => <li key={i}>{n}</li>)}
      </ul>
    </div>
  );
}
