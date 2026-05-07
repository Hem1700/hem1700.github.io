import { useEffect, useRef, useState } from "react";
import { APPS } from "../data/apps";
import { blogs, cves, identity, manifesto, now, projects, projectMeta } from "../data/content";

const BANNER =
  "  _   _ _____ __  __        ___  ____\n" +
  " | | | | ____|  \\/  |      / _ \\/ ___|\n" +
  " | |_| |  _| | |\\/| |____ | | | \\___ \\\n" +
  " |  _  | |___| |  | |____|| |_| |___) |\n" +
  " |_| |_|_____|_|  |_|       \\___/|____/";

const VALID_GAMES = ["node-hunt", "packet-intercept", "malware-maze"];
const VALID_DIRS = ["~", "~/projects", "~/writing", "~/cves"];
const ALL_COMMANDS = [
  "help", "whoami", "ls", "cd", "pwd", "cves",
  "cat", "open", "play", "fortune", "clear", "exit",
];

// Map a "cd" target to a normalized cwd path, given the current cwd.
function resolveCd(target, cwd) {
  if (!target || target === "~" || target === "/" || target === "/home/hem") {
    return "~";
  }
  if (target === "..") {
    if (cwd === "~") return "~";
    const parts = cwd.split("/");
    parts.pop();
    return parts.join("/") || "~";
  }
  let resolved;
  if (target.startsWith("~/")) {
    resolved = target;
  } else if (target.startsWith("/home/hem/")) {
    resolved = "~/" + target.slice("/home/hem/".length);
  } else {
    resolved = cwd === "~" ? `~/${target}` : `${cwd}/${target}`;
  }
  resolved = resolved.replace(/\/$/, "");
  return VALID_DIRS.includes(resolved) ? resolved : null;
}

function listDir(cwd) {
  if (cwd === "~") return "about.txt  .now  manifesto.md  projects/  writing/  cves/";
  if (cwd === "~/projects") {
    return projects
      .map((p) => projectMeta[p.title]?.code || p.title.split(" ").map((w) => w[0]).join("").toUpperCase())
      .join("  ");
  }
  if (cwd === "~/writing") return blogs.map((b) => b.slug).join("  ");
  if (cwd === "~/cves") return cves.map((v) => v.id).join("  ");
  return "(empty)";
}

// Run a single command. Pure-ish — no setHist/setCwd here. Returns:
//   out:    array of history rows to append
//   newCwd: cwd after the command (caller threads this into the next cmd)
//   side:   'clear' | 'exit' | null
//   halt:   true means && should stop here (error / unknown command)
function runOne(cmd, atCwd, ctx) {
  const out = [{ type: "in", t: cmd, cwd: atCwd }];
  let newCwd = atCwd;
  let side = null;
  let halt = false;
  const a = cmd.trim().split(/\s+/);
  const c = a[0];

  if (!c) {
    // empty — show prompt only
  } else if (c === "help") {
    out.push(
      { type: "em", t: "available: help, whoami, ls, cd, pwd, cves, cat <file>, open <app>, play <game>, fortune, clear, exit" },
      { type: "dm", t: "files: about.txt, .now, manifesto.md, cve <ID>" },
      { type: "dm", t: "dirs:  ~, ~/projects, ~/writing, ~/cves" },
      { type: "dm", t: "chain commands with && · Tab to complete" },
    );
  } else if (c === "whoami") {
    out.push(
      { type: "em", t: `${identity.name} — ${identity.role}` },
      { type: "dm", t: `${identity.current} · ${identity.location}` },
    );
  } else if (c === "ls") {
    out.push({ type: "em", t: listDir(atCwd) });
  } else if (c === "pwd") {
    out.push({ type: "em", t: atCwd === "~" ? "/home/hem" : `/home/hem/${atCwd.slice(2)}` });
  } else if (c === "cd") {
    const target = a[1];
    const next = resolveCd(target, atCwd);
    if (next === null) {
      out.push({ type: "bd", t: `cd: ${target}: no such directory` });
      halt = true;
    } else {
      newCwd = next;
      if (next !== atCwd) out.push({ type: "dm", t: `→ ${next}` });
    }
  } else if (c === "cves") {
    out.push({ type: "em", t: "ID                 TARGET                  CLASS                  YEAR  ROLE" });
    cves.forEach((v) => {
      out.push({
        type: "ln",
        t: `${v.id.padEnd(18)} ${(v.target || "").padEnd(23)} ${(v.class || "").padEnd(22)} ${v.year}  study`,
      });
    });
  } else if (c === "cat") {
    const f = a[1];
    if (!f) {
      out.push({ type: "bd", t: "cat: missing operand" });
      halt = true;
    } else if (f === "about.txt" || f === "about") {
      out.push({ type: "em", t: `${identity.name} · ${identity.role}\n${identity.current} · ${identity.location}\n` });
    } else if (f === ".now") {
      now.forEach((n) => out.push({ type: "ln", t: `▸ ${n}` }));
    } else if (f === "manifesto.md") {
      manifesto.forEach((m) => out.push({ type: "ln", t: `${m.k} ${m.v}` }));
    } else if (f === "cve") {
      const id = a[2];
      if (!id) {
        out.push({ type: "bd", t: "cat: cve: missing CVE id" });
        halt = true;
      } else {
        const v = cves.find((x) => x.id.toLowerCase() === id.toLowerCase());
        if (v) {
          out.push({ type: "em", t: `${v.id}\n  target: ${v.target}\n  class:  ${v.class}\n  year:   ${v.year}\n  blog:   /blog/${v.slug}` });
        } else {
          out.push({ type: "bd", t: `cat: cve ${id}: not found` });
          halt = true;
        }
      }
    } else if (atCwd === "~/projects") {
      const proj = projects.find((p) => {
        const meta = projectMeta[p.title];
        return (
          (meta?.code && meta.code.toLowerCase() === f.toLowerCase()) ||
          p.title.toLowerCase() === f.toLowerCase()
        );
      });
      if (proj) {
        const meta = projectMeta[proj.title] || {};
        out.push({ type: "em", t: `${meta.code || "—"} — ${proj.title}` });
        out.push({ type: "dm", t: `${meta.status || "—"} · ${(proj.tags || []).join(" / ")}` });
        out.push({ type: "ln", t: proj.description });
        if (meta.metric) out.push({ type: "ln", t: `metric: ${meta.metric}` });
        if (meta.stack?.length) out.push({ type: "ln", t: `stack:  ${meta.stack.join(", ")}` });
        if (proj.href && proj.href !== "#") out.push({ type: "lk", t: proj.href });
      } else {
        out.push({ type: "bd", t: `cat: ${f}: no such project` });
        halt = true;
      }
    } else if (atCwd === "~/writing") {
      const post = blogs.find((b) => b.slug.toLowerCase() === f.toLowerCase());
      if (post) {
        out.push({ type: "em", t: post.title });
        out.push({ type: "dm", t: `${post.date} · ${post.readTime} · [${post.category}]` });
        out.push({ type: "ln", t: post.excerpt });
        out.push({ type: "dm", t: `// read: /blog/${post.slug}` });
      } else {
        out.push({ type: "bd", t: `cat: ${f}: no such writing` });
        halt = true;
      }
    } else if (atCwd === "~/cves") {
      const v = cves.find((x) => x.id.toLowerCase() === f.toLowerCase());
      if (v) {
        out.push({ type: "em", t: `${v.id}\n  target: ${v.target}\n  class:  ${v.class}\n  year:   ${v.year}\n  blog:   /blog/${v.slug}` });
      } else {
        out.push({ type: "bd", t: `cat: ${f}: not found in cves/` });
        halt = true;
      }
    } else {
      out.push({ type: "bd", t: `cat: ${f}: No such file` });
      halt = true;
    }
  } else if (c === "open") {
    const t = a[1];
    if (t && APPS[t]) {
      if (ctx.onLaunch) ctx.onLaunch(t);
      out.push({ type: "dm", t: `opening ${t}…` });
    } else {
      out.push({ type: "bd", t: `open: ${t || "(no app)"}: unknown app` });
      halt = true;
    }
  } else if (c === "play") {
    const g = a[1];
    if (g && VALID_GAMES.includes(g)) {
      if (ctx.onLaunch) ctx.onLaunch("games", { initialGame: g });
      out.push({ type: "dm", t: `loading ${g}…` });
    } else {
      out.push({
        type: "bd",
        t: `play: ${g || "(no game)"}: unknown. try: ${VALID_GAMES.join(", ")}`,
      });
      halt = true;
    }
  } else if (c === "fortune") {
    const f = manifesto[Math.floor(Math.random() * manifesto.length)];
    if (f) out.push({ type: "wn", t: `❝ ${f.v} ❞` });
  } else if (c === "clear") {
    side = "clear";
  } else if (c === "exit") {
    side = "exit";
  } else {
    out.push({ type: "bd", t: `${c}: command not found` });
    halt = true;
  }

  return { out, newCwd, side, halt };
}

// Tab-completion candidates for the current input + cwd.
function getCompletions(input, cwd) {
  const endsWithSpace = /\s$/.test(input);
  const trimmed = input.trimEnd();
  const tokens = trimmed.length ? trimmed.split(/\s+/) : [];
  const argIdx = endsWithSpace ? tokens.length : Math.max(0, tokens.length - 1);
  const prefix = endsWithSpace ? "" : tokens[tokens.length - 1] || "";
  const lower = (s) => (s || "").toLowerCase();

  // First token = command name
  if (argIdx === 0) {
    return ALL_COMMANDS.filter((c) => c.startsWith(prefix));
  }

  const cmd = tokens[0];

  if (cmd === "cd") {
    const candidates = cwd === "~"
      ? ["projects", "writing", "cves", "..", "~"]
      : ["..", "~"];
    return candidates.filter((d) => d.startsWith(prefix));
  }

  if (cmd === "cat") {
    if (argIdx === 1) {
      let names = [];
      if (cwd === "~") names = ["about.txt", ".now", "manifesto.md", "cve"];
      else if (cwd === "~/projects") names = projects.map((p) => projectMeta[p.title]?.code).filter(Boolean);
      else if (cwd === "~/writing") names = blogs.map((b) => b.slug);
      else if (cwd === "~/cves") names = cves.map((v) => v.id);
      return names.filter((n) => lower(n).startsWith(lower(prefix)));
    }
    if (argIdx === 2 && tokens[1] === "cve") {
      return cves.map((v) => v.id).filter((id) => lower(id).startsWith(lower(prefix)));
    }
    return [];
  }

  if (cmd === "open") {
    return Object.keys(APPS).filter((a) => a.startsWith(prefix));
  }

  if (cmd === "play") {
    return VALID_GAMES.filter((g) => g.startsWith(prefix));
  }

  return [];
}

function commonPrefix(strs) {
  if (!strs.length) return "";
  let p = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (p && !strs[i].toLowerCase().startsWith(p.toLowerCase())) p = p.slice(0, -1);
  }
  return p;
}

function applyCompletion(input, replacement) {
  const endsWithSpace = /\s$/.test(input);
  if (endsWithSpace) return input + replacement;
  const lastSpace = input.lastIndexOf(" ");
  const head = lastSpace === -1 ? "" : input.slice(0, lastSpace + 1);
  return head + replacement;
}

export default function Terminal({ runOnOpen, runOnOpenNonce, onLaunch }) {
  const [hist, setHist] = useState([
    { type: "ban", t: BANNER },
    { type: "dm", t: "HEM-OS 1.7.0 — type 'help' to begin." },
  ]);
  const [input, setInput] = useState("");
  const [cmds, setCmds] = useState([]);
  const [ci, setCi] = useState(-1);
  const [cwd, setCwd] = useState("~");
  const ref = useRef(null);
  const inputRef = useRef(null);
  const draftRef = useRef("");

  useEffect(() => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
  }, [hist]);

  // Run a chain of commands joined by `&&`, threading cwd through each.
  // History is updated in one batch at the end so the UI re-renders once.
  const runChain = (raw, startCwd) => {
    const parts = raw.split(/\s*&&\s*/).filter((p) => p.trim());
    let cwdLocal = startCwd;
    let pendingOut = [];
    let resetHist = false;
    let exited = false;

    for (const part of parts) {
      const { out, newCwd, side, halt } = runOne(part, cwdLocal, { onLaunch });
      if (side === "clear") {
        resetHist = true;
        pendingOut = [];
        cwdLocal = newCwd;
        continue;
      }
      if (side === "exit") {
        exited = true;
        break;
      }
      pendingOut.push(...out);
      cwdLocal = newCwd;
      if (halt) break;
    }

    if (exited) {
      window.dispatchEvent(new Event("hemos-close-term"));
      return;
    }
    if (resetHist) {
      setHist(pendingOut);
    } else if (pendingOut.length) {
      setHist((h) => [...h, ...pendingOut]);
    }
    if (cwdLocal !== startCwd) setCwd(cwdLocal);
  };

  // Auto-run an initial command (e.g., spotlight CVE select).
  useEffect(() => {
    if (runOnOpen) {
      runChain(runOnOpen, cwd);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runOnOpen, runOnOpenNonce]);

  const onKey = (e) => {
    if (e.key === "Enter") {
      if (input.trim()) {
        setCmds((cur) => [...cur, input]);
        setCi(-1);
        draftRef.current = "";
        runChain(input, cwd);
      }
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmds.length) {
        if (ci < 0) draftRef.current = input;
        const ni = ci < 0 ? cmds.length - 1 : Math.max(0, ci - 1);
        setCi(ni);
        setInput(cmds[ni]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (ci >= 0) {
        const ni = ci + 1;
        if (ni >= cmds.length) {
          setCi(-1);
          setInput(draftRef.current);
          draftRef.current = "";
        } else {
          setCi(ni);
          setInput(cmds[ni]);
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const matches = getCompletions(input, cwd);
      if (matches.length === 0) return;
      if (matches.length === 1) {
        setInput(applyCompletion(input, matches[0] + " "));
        return;
      }
      // Multiple matches — extend to common prefix if possible, then list.
      const endsWithSpace = /\s$/.test(input);
      const lastSpace = input.lastIndexOf(" ");
      const currentPrefix = endsWithSpace ? "" : (lastSpace === -1 ? input : input.slice(lastSpace + 1));
      const cp = commonPrefix(matches);
      if (cp.length > currentPrefix.length) {
        setInput(applyCompletion(input, cp));
      }
      setHist((h) => [...h, { type: "dm", t: matches.join("  ") }]);
    }
  };

  return (
    <div className="at" ref={ref} onClick={() => inputRef.current && inputRef.current.focus()}>
      {hist.map((l, i) => {
        if (l.type === "ban") return <pre key={i} className="ban">{l.t}</pre>;
        if (l.type === "in") {
          return (
            <div key={i} className="ln">
              <span className="pp">hem@hemos:{l.cwd || "~"}$</span> {l.t}
            </div>
          );
        }
        return <div key={i} className={`ln ${l.type}`}>{l.t}</div>;
      })}
      <div className="il">
        <span className="pp">hem@hemos:{cwd}$</span>
        <input
          ref={inputRef}
          className="ip"
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKey}
          spellCheck={false}
        />
      </div>
    </div>
  );
}
