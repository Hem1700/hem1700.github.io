import { useMemo, useState } from "react";
import { APPS, ALL_APPS } from "../data/apps";
import { blogs, projects, projectMeta } from "../data/content";

const TYPE_LABEL = {
  app: "Apps",
  post: "Writing",
  project: "Projects",
  cve: "CVEs",
};
const TYPE_ORDER = ["app", "post", "project", "cve"];

// Score how well an item matches a query. Higher = more relevant.
// Title matches outweigh body matches; exact substring beats word-prefix.
function score(item, q) {
  if (!q) return 0;
  const needle = q.toLowerCase();
  const title = (item.title || "").toLowerCase();
  const body = (item.body || "").toLowerCase();
  let s = 0;
  if (title === needle) s += 100;
  else if (title.startsWith(needle)) s += 60;
  else if (title.includes(needle)) s += 40;
  if (body.includes(needle)) s += 12;
  // word-boundary bonuses for multi-word queries
  for (const tok of needle.split(/\s+/).filter(Boolean)) {
    if (title.includes(tok)) s += 4;
    if (body.includes(tok)) s += 1;
  }
  return s;
}

export default function Spotlight({ onClose, onLaunch, onOpenPost, onRunCveCommand }) {
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);

  const all = useMemo(() => {
    const apps = ALL_APPS.map((id) => ({
      type: "app",
      title: APPS[id].title,
      subtitle: APPS[id].title.split("—")[1]?.trim() || "",
      body: APPS[id].title,
      action: () => onLaunch(id),
      g: APPS[id].g,
    }));
    const posts = blogs.map((b) => ({
      type: "post",
      title: b.title,
      subtitle: `${b.date} · ${b.readTime} · ${b.category}`,
      body: `${b.excerpt || ""} ${b.category || ""}`,
      action: () => onOpenPost(b.slug),
      g: "g-notes",
    }));
    const projs = projects.map((p) => {
      const meta = projectMeta[p.title] || {};
      return {
        type: "project",
        title: p.title,
        subtitle: [meta.code, meta.status, (p.tags || []).join(" / ")].filter(Boolean).join(" · "),
        body: `${p.description || ""} ${(p.tags || []).join(" ")} ${(meta.stack || []).join(" ")} ${meta.code || ""}`,
        action: () => onLaunch("files", { selectedTitle: p.title }),
        g: "g-files",
      };
    });
    const cveLike = blogs.filter((b) => b.title.toUpperCase().includes("CVE"));
    const cves = cveLike.map((b) => {
      const idMatch = b.title.match(/CVE[-–](\d{4})[-–]?(\d+)/i);
      const id = idMatch ? `CVE-${idMatch[1]}-${idMatch[2]}` : b.slug.toUpperCase();
      return {
        type: "cve",
        title: `${id} — ${b.title.replace(/^CVE[-–\d]+/i, "").trim()}`,
        subtitle: `${b.date} · ${b.category}`,
        body: `${b.excerpt || ""} ${b.category || ""} ${id}`,
        action: () => onRunCveCommand(id),
        g: "g-term",
      };
    });
    return [...apps, ...posts, ...projs, ...cves];
  }, [onLaunch, onOpenPost, onRunCveCommand]);

  // Default empty-state suggestions: 3 apps + 3 most-recent posts.
  const empty = useMemo(() => {
    const featuredApps = ["finder", "notes", "terminal"]
      .map((id) => all.find((x) => x.type === "app" && x.title === APPS[id].title))
      .filter(Boolean);
    const recentPosts = all.filter((x) => x.type === "post").slice(0, 3);
    return [...featuredApps, ...recentPosts];
  }, [all]);

  // Scored, ranked, capped at 12.
  const filtered = useMemo(() => {
    if (!q.trim()) return empty;
    return all
      .map((x) => ({ item: x, s: score(x, q) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 12)
      .map((r) => r.item);
  }, [q, all, empty]);

  // Group results by type, preserving relevance order within each group.
  const grouped = useMemo(() => {
    const buckets = {};
    filtered.forEach((it) => {
      (buckets[it.type] ||= []).push(it);
    });
    return TYPE_ORDER.filter((t) => buckets[t]?.length).map((t) => ({
      type: t,
      label: TYPE_LABEL[t],
      items: buckets[t],
    }));
  }, [filtered]);

  // Map flat selection index → grouped item. Build a flat list to keep arrow navigation simple.
  const flat = grouped.flatMap((g) => g.items);

  const onKey = (e) => {
    if (e.key === "Escape") onClose();
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSel((s) => Math.min(flat.length - 1, s + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSel((s) => Math.max(0, s - 1));
    } else if (e.key === "Enter") {
      const r = flat[sel];
      if (r) {
        r.action();
        onClose();
      }
    }
  };

  return (
    <div className="spotlight" onClick={(e) => e.stopPropagation()}>
      <input
        autoFocus
        placeholder="Search apps, posts, projects, CVEs…"
        value={q}
        onChange={(e) => { setQ(e.target.value); setSel(0); }}
        onKeyDown={onKey}
      />
      {!q.trim() && (
        <div className="sp-hint">
          <span>↑↓ navigate</span>
          <span>↵ open</span>
          <span>esc close</span>
        </div>
      )}
      <div className="spot-rs">
        {grouped.length === 0 && (
          <div className="re"><div className="ttl" style={{ color: "var(--mut)" }}>no results for "{q}"</div></div>
        )}
        {grouped.map((group) => (
          <div key={group.type}>
            <div className="sp-group">{group.label}</div>
            {group.items.map((r) => {
              const idx = flat.indexOf(r);
              return (
                <div
                  key={`${group.type}-${r.title}`}
                  className={`re ${idx === sel ? "on" : ""}`}
                  onClick={() => { r.action(); onClose(); }}
                  onMouseEnter={() => setSel(idx)}
                >
                  <div className={`ic ${r.g}`} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="ttl">{r.title}</div>
                    {r.subtitle && <div className="typ">{r.subtitle}</div>}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
