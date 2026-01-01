import { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/content";
import { posts } from "../data/posts";

function sanitizePostContent(htmlString) {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");

    // Strip external chrome or inline styling that fights the SPA theme
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

    // Remove duplicated titles from imported HTML; page already renders the H1
    const firstH1 = doc.querySelector("h1");
    if (firstH1) firstH1.remove();

    // Prefer the inner text wrapper; fall back to section/article/body
    const mainCandidates = [".blog-text", "article", ".blog-post-content", "main"];
    let container = doc.body;
    for (const selector of mainCandidates) {
      const found = doc.querySelector(selector);
      if (found) {
        container = found;
        break;
      }
    }

    // Unwrap generic container divs to avoid nested widths interfering with our card
    container.querySelectorAll(".container").forEach((node) => {
      while (node.firstChild) {
        node.parentNode.insertBefore(node.firstChild, node);
      }
      node.remove();
    });

    // Add predictable IDs for headings (helps future TOC or anchor links)
    Array.from(container.querySelectorAll("h2, h3")).forEach((heading, idx) => {
      if (!heading.id) heading.id = `section-${idx + 1}`;
    });

    return container.innerHTML || htmlString;
  } catch (e) {
    return htmlString;
  }
}

export default function PostPage() {
  const { slug } = useParams();
  const postEntry = posts[slug];
  const meta = blogs.find((b) => b.slug === slug);

  const content = useMemo(() => {
    if (!postEntry) return "";
    return sanitizePostContent(postEntry.content);
  }, [postEntry]);

  const getTheme = () => (document.body.classList.contains("dark") ? "dark" : "light");

  useEffect(() => {
    const container = document.querySelector(".giscus-container");
    if (!container) return;
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
    script.setAttribute("data-theme", getTheme());

    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, [slug]);

  useEffect(() => {
    const applyTheme = () => {
      const iframe = document.querySelector("iframe.giscus-frame");
      if (!iframe) return;
      iframe.contentWindow?.postMessage(
        {
          giscus: {
            setConfig: {
              theme: getTheme(),
            },
          },
        },
        "https://giscus.app"
      );
    };

    const observer = new MutationObserver(applyTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    applyTheme();
    return () => observer.disconnect();
  }, []);

  if (!postEntry) {
    return (
      <main className="section blog-post-content container">
        <h2>Post not found</h2>
        <p>Signal lost. Let’s go back.</p>
        <Link to="/blogs" className="view-credentials">
          Back to Blog
        </Link>
      </main>
    );
  }

  return (
    <>
      <header className="blog-post-header">
        <div className="container text-center">
          <h1 className="blog-post-title">{postEntry.title}</h1>
          {meta && <p className="blog-post-date">{meta.date} · {meta.readTime}</p>}
        </div>
      </header>
      <main className="section blog-post-content container">
        <article dangerouslySetInnerHTML={{ __html: content }} />
        <section className="comments">
          <div className="container">
            <div className="giscus-container" />
          </div>
        </section>
      </main>
    </>
  );
}
