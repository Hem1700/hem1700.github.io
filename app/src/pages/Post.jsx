import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/content";
import { posts } from "../data/posts";

function extractContent(htmlString) {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    // Remove inline styles to avoid clashing with site theme
    doc.querySelectorAll("style").forEach((node) => node.remove());
    // Remove stray body/html wrappers; keep inner content
    const bodyHtml = doc.body ? doc.body.innerHTML : htmlString;
    return bodyHtml;
  } catch (e) {
    return htmlString;
  }
}

export default function PostPage() {
  const { slug } = useParams();
  const postEntry = posts[slug];
  const meta = blogs.find((b) => b.slug === slug);
  const toc = useMemo(() => {
    if (!postEntry) return [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(postEntry.content, "text/html");
    return Array.from(doc.querySelectorAll("h2, h3")).map((h, idx) => ({
      text: h.textContent || `Section ${idx + 1}`,
      id: `toc-${idx}`,
      tag: h.tagName.toLowerCase(),
    }));
  }, [postEntry]);

  const content = useMemo(() => {
    if (!postEntry) return "";
    // add IDs for TOC anchors
    const parser = new DOMParser();
    const doc = parser.parseFromString(postEntry.content, "text/html");
    Array.from(doc.querySelectorAll("h2, h3")).forEach((h, idx) => {
      h.id = `toc-${idx}`;
    });
    return extractContent(doc.documentElement.outerHTML);
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
