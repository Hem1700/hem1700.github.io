import { useMemo } from "react";
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

  if (!postEntry) {
    return (
      <main className="blog-post-content container">
        <h2>Post not found</h2>
        <p>The post you’re looking for does not exist.</p>
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
      <main className="blog-post-content container">
        <article dangerouslySetInnerHTML={{ __html: content }} />
      </main>
    </>
  );
}
