import { useEffect, useMemo, useState } from "react";
import { blogs } from "../data/content";

export default function Notes({ initialSlug, onOpenPost }) {
  const [q, setQ] = useState("");
  const [selSlug, setSelSlug] = useState(initialSlug || (blogs[0] && blogs[0].slug));

  useEffect(() => {
    if (initialSlug) setSelSlug(initialSlug);
  }, [initialSlug]);

  const filtered = useMemo(() => {
    if (!q) return blogs;
    const needle = q.toLowerCase();
    return blogs.filter(
      (b) =>
        b.title.toLowerCase().includes(needle) ||
        b.excerpt.toLowerCase().includes(needle) ||
        (b.category || "").toLowerCase().includes(needle)
    );
  }, [q]);

  const sel = blogs.find((b) => b.slug === selSlug) || blogs[0];

  return (
    <div className="an">
      <div className="ls">
        <div className="search">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="search posts…"
            spellCheck={false}
          />
        </div>
        {filtered.map((p) => (
          <div
            key={p.slug}
            className={`it ${p.slug === selSlug ? "on" : ""}`}
            onClick={() => setSelSlug(p.slug)}
          >
            <div className="ttl">{p.title}</div>
            <div className="mt">
              <span>{p.date}</span>
              <span>·</span>
              <span>{p.readTime}</span>
              <span className="tg">[{p.category}]</span>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="it" style={{ color: "var(--mut)" }}>no matches</div>
        )}
      </div>
      <div className="dt">
        {sel && (
          <>
            <h1>{sel.title}</h1>
            <div className="mt">{sel.date} · {sel.readTime} · {sel.category}</div>
            <div className="bd">
              <p>{sel.excerpt}</p>
            </div>
            <div className="max" onClick={() => onOpenPost && onOpenPost(sel.slug)}>
              ⤢ Maximize — read full post
            </div>
          </>
        )}
      </div>
    </div>
  );
}
