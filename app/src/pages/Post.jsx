import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/content";
import { posts } from "../data/posts";

function extractContent(htmlString) {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const styles = Array.from(doc.querySelectorAll("style"))
      .map((node) => node.outerHTML)
      .join("");
    const bodyHtml = doc.body ? doc.body.innerHTML : htmlString;
    return `${styles}${bodyHtml}`;
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
    return extractContent(postEntry.content);
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
