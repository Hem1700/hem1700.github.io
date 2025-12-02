import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { blogs, certifications, experience, projects, socialLinks } from "../data/content";

const helpLines = [
  "help                          show commands",
  "projects                      list projects",
  "open <project-slug>           go to Projects and highlight target",
  "blogs                         list blogs",
  "read <blog-slug>              open blog post",
  "certs [--issuer=AWS]          list certifications (optional issuer/domain filter)",
  "experience                    show mission log",
  "contact                       contact details",
  "goto <home|projects|certs|blogs>  navigate to a page",
  "clear                         clear the terminal",
];

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export default function TerminalShell() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const [history, setHistory] = useState([
    { cmd: "help", type: "help", payload: helpLines },
  ]);
  const [commandHistory, setCommandHistory] = useState(["help"]);
  const [historyIndex, setHistoryIndex] = useState(null);
  const [value, setValue] = useState("");

  const projectEntries = useMemo(
    () => projects.map((p) => ({ ...p, slug: slugify(p.title) })),
    []
  );
  const blogEntries = useMemo(
    () => blogs.map((b) => ({ ...b, slug: slugify(b.slug || b.title) })),
    []
  );
  const certEntries = useMemo(
    () =>
      certifications.map((c) => ({
        ...c,
        slug: slugify(c.title),
      })),
    []
  );

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "/" && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "?" && document.activeElement !== inputRef.current) {
        e.preventDefault();
        runCommand("help");
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  const pushHistory = (cmd, type, payload) => {
    setHistory((prev) => [...prev, { cmd, type, payload }]);
    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(null);
  };

  const runCommand = (raw) => {
    const cmd = raw.trim();
    if (!cmd) return;
    const [base, ...rest] = cmd.split(" ");
    const arg = rest.join(" ").trim();

    if (base === "help" || base === "?") {
      pushHistory(cmd, "help", helpLines);
      return;
    }

    if (base === "clear") {
      setHistory([]);
      setCommandHistory([]);
      setHistoryIndex(null);
      return;
    }

    if (base === "projects") {
      pushHistory(cmd, "projects", projectEntries);
      return;
    }

    if (base === "open") {
      const target = projectEntries.find((p) => p.slug === slugify(arg));
      if (target) {
        pushHistory(cmd, "info", `Opening project: ${target.title}`);
        navigate("/projects", { state: { highlight: target.slug } });
      } else {
        pushHistory(cmd, "error", "Project not found. Use `projects` to view slugs.");
      }
      return;
    }

    if (base === "blogs") {
      pushHistory(cmd, "blogs", blogEntries);
      return;
    }

    if (base === "read") {
      const target = blogs.find((b) => slugify(b.slug || b.title) === slugify(arg));
      if (target) {
        pushHistory(cmd, "info", `Opening blog: ${target.title}`);
        navigate(target.href);
      } else {
        pushHistory(cmd, "error", "Blog not found. Use `blogs` to view slugs.");
      }
      return;
    }

    if (base === "certs") {
      const issuerMatch = arg.match(/--issuer=([a-z0-9-]+)/i);
      const domainMatch = arg.match(/--domain=([a-z0-9-]+)/i);
      const filtered = certEntries.filter((c) => {
        const issuerOk = issuerMatch
          ? slugify(c.issuer).includes(issuerMatch[1].toLowerCase())
          : true;
        const domainOk = domainMatch
          ? slugify(c.domain).includes(domainMatch[1].toLowerCase())
          : true;
        return issuerOk && domainOk;
      });
      pushHistory(cmd, "certs", filtered);
      return;
    }

    if (base === "experience") {
      pushHistory(cmd, "experience", experience);
      return;
    }

    if (base === "contact") {
      pushHistory(cmd, "contact", socialLinks);
      return;
    }

    if (base === "goto") {
      if (["home", "projects", "certs", "blogs", "certifications"].includes(arg)) {
        const route =
          arg === "home"
            ? "/"
            : arg === "projects"
              ? "/projects"
              : arg.startsWith("cert")
                ? "/certifications"
                : "/blogs";
        pushHistory(cmd, "info", `Navigating to ${route}`);
        navigate(route);
      } else {
        pushHistory(cmd, "error", "Unknown destination. Use home, projects, certs, blogs.");
      }
      return;
    }

    pushHistory(cmd, "error", "Unknown command. Type `help` for options.");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      runCommand(value);
      setValue("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!commandHistory.length) return;
      const nextIndex =
        historyIndex === null
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setValue(commandHistory[nextIndex] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === null) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(null);
        setValue("");
      } else {
        setHistoryIndex(nextIndex);
        setValue(commandHistory[nextIndex] || "");
      }
    }
  };

  const renderPayload = (entry) => {
    const { type, payload } = entry;
    if (type === "help" && Array.isArray(payload)) {
      return (
        <ul className="terminal-list">
          {payload.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      );
    }
    if (type === "projects") {
      return (
        <div className="terminal-table">
          {payload.map((p) => (
            <div className="terminal-row" key={p.slug}>
              <div>
                <span className="terminal-strong">{p.title}</span>
                <span className="terminal-dim"> ({p.slug})</span>
              </div>
              <div className="terminal-dim">{p.description}</div>
              <div className="terminal-tags">
                {p.tags?.map((t) => (
                  <span key={t} className="terminal-tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="terminal-actions">
                <button onClick={() => navigate("/projects")}>open</button>
                {p.href && (
                  <a href={p.href} target="_blank" rel="noreferrer">
                    repo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      );
    }
    if (type === "blogs") {
      return (
        <div className="terminal-table">
          {payload.map((b) => (
            <div className="terminal-row" key={b.slug}>
              <div>
                <span className="terminal-strong">{b.title}</span>
                <span className="terminal-dim"> ({slugify(b.slug)})</span>
              </div>
              <div className="terminal-dim">
                {b.date} · {b.readTime}
              </div>
              <div className="terminal-actions">
                <button onClick={() => navigate(b.href)}>read</button>
              </div>
            </div>
          ))}
        </div>
      );
    }
    if (type === "certs") {
      if (!payload.length) return <div className="terminal-dim">No certs match filters.</div>;
      return (
        <div className="terminal-table">
          {payload.map((c) => (
            <div className="terminal-row" key={c.slug}>
              <div className="terminal-strong">{c.title}</div>
              <div className="terminal-dim">{c.details}</div>
              <div className="terminal-tags">
                <span className="terminal-tag">{c.domain}</span>
                <span className="terminal-tag">{c.issuer}</span>
              </div>
              <div className="terminal-actions">
                <a href={c.href} target="_blank" rel="noreferrer">
                  verify
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    }
    if (type === "experience") {
      return (
        <div className="terminal-table">
          {payload.map((role) => (
            <div className="terminal-row" key={`${role.org}-${role.range}`}>
              <div className="terminal-strong">
                {role.role} @ {role.org}
              </div>
              <div className="terminal-dim">{role.range}</div>
              <div className="terminal-dim">{role.desc}</div>
            </div>
          ))}
        </div>
      );
    }
    if (type === "contact") {
      return (
        <div className="terminal-table">
          <div className="terminal-row">
            <div className="terminal-strong">Email</div>
            <div className="terminal-actions">
              <a href="mailto:hemparekh1596@gmail.com">send mail</a>
            </div>
          </div>
          {payload.map((s) => (
            <div className="terminal-row" key={s.href}>
              <div className="terminal-strong">{s.label}</div>
              <div className="terminal-actions">
                <a href={s.href} target="_blank" rel="noreferrer">
                  open
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    }
    if (type === "info") {
      return <div className="terminal-dim">{payload}</div>;
    }
    if (type === "error") {
      return <div className="terminal-error">{payload}</div>;
    }
    return null;
  };

  return (
    <section className="terminal-shell container">
      <div className="terminal-header">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="terminal-title">hem@portfolio:~</span>
        <span className="terminal-shortcut">Press / to focus, ? for help</span>
      </div>
      <div className="terminal-body">
        {history.map((entry, idx) => (
          <div key={`${entry.cmd}-${idx}`} className="terminal-block">
            <div className="terminal-line">
              <span className="prompt">❯</span>
              <span className="command">{entry.cmd}</span>
            </div>
            <div className="terminal-output">{renderPayload(entry)}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="terminal-input">
        <span className="prompt">❯</span>
        <input
          ref={inputRef}
          aria-label="Terminal command input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a command, e.g., projects, blogs, certs --issuer=AWS, read firmware_llm_annotator"
        />
      </div>
    </section>
  );
}
