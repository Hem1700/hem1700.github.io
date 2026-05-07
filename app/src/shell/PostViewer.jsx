import { useEffect, useMemo } from "react";
import { blogs } from "../data/content";
import { posts } from "../data/posts";

// Strip nav/header/footer/style chrome from imported blog HTML and unwrap
// container divs so the post integrates with our centered layout.
function sanitizePostContent(htmlString) {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");

    const removeSelectors = [
      "style",
      "script",
      "link",
      "nav",
      "header",
      "footer",
      ".navbar",
      ".nav-container",
      ".theme-toggle",
      ".footer",
      ".social-links",
      ".social-icons",
    ];
    doc.querySelectorAll(removeSelectors.join(",")).forEach((node) => node.remove());
    doc.querySelectorAll("[style]").forEach((el) => el.removeAttribute("style"));

    const firstH1 = doc.querySelector("h1");
    if (firstH1) firstH1.remove();

    const mainCandidates = [".blog-text", "article", ".blog-post-content", "main"];
    let container = doc.body;
    for (const selector of mainCandidates) {
      const found = doc.querySelector(selector);
      if (found) {
        container = found;
        break;
      }
    }

    container.querySelectorAll(".container").forEach((node) => {
      while (node.firstChild) {
        node.parentNode.insertBefore(node.firstChild, node);
      }
      node.remove();
    });

    Array.from(container.querySelectorAll("h2, h3")).forEach((heading, idx) => {
      if (!heading.id) heading.id = `section-${idx + 1}`;
    });

    return container.innerHTML || htmlString;
  } catch (_) {
    return htmlString;
  }
}

export default function PostViewer({ slug, onClose }) {
  const postEntry = posts[slug];
  const meta = blogs.find((b) => b.slug === slug);

  const content = useMemo(() => {
    if (!postEntry) return "";
    return sanitizePostContent(postEntry.content);
  }, [postEntry]);

  // Mount giscus once per slug. Theme is fixed dark (no toggle).
  useEffect(() => {
    if (!postEntry) return undefined;
    const container = document.querySelector(".pv-comments");
    if (!container) return undefined;
    container.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-giscus", "true");
    script.setAttribute("data-repo", "Hem1700/hem1700.github.io");
    script.setAttribute("data-repo-id", "R_kgDONilgZg");
    script.setAttribute("data-category", "General");
    script.setAttribute("data-category-id", "DIC_kwDONilgZs4CzSR2");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "1");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-lang", "en");
    script.setAttribute("data-theme", "dark");
    container.appendChild(script);

    return () => { container.innerHTML = ""; };
  }, [slug, postEntry]);

  if (!postEntry) {
    return (
      <div className="pv">
        <div className="pv-bar">
          <div className="pv-close" onClick={onClose}>✕</div>
          <div className="pv-ti">Post not found</div>
        </div>
        <div className="pv-body">
          <h1 className="pv-title">Post not found</h1>
          <p>Signal lost. Close this and try another post from the Notes app.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pv">
      <div className="pv-bar">
        <div className="pv-close" onClick={onClose}>✕</div>
        <div className="pv-ti">{postEntry.title}</div>
      </div>
      <div className="pv-body">
        <h1 className="pv-title">{postEntry.title}</h1>
        {meta && <div className="pv-meta">{meta.date} · {meta.readTime} · {meta.category}</div>}
        <div className="pv-content" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <div className="pv-comments" />
    </div>
  );
}
