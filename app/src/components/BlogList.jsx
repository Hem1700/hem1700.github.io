import { Link } from "react-router-dom";

export default function BlogList({ posts, page = 1, totalPages = 1, onPageChange }) {
  return (
    <section className="blog-list-section">
      <div className="container">
        {posts.map((post) => (
          <article className="blog-row vertical" key={post.title}>
            <div className="blog-row-header">
              <div className="blog-row-meta">
                <div className="blog-row-date">{post.date}</div>
                <div className="blog-row-time">{post.readTime}</div>
              </div>
              <div className="blog-row-cta">
                <Link to={post.href} className="view-credentials">
                  Read
                </Link>
              </div>
            </div>
            <div className="blog-row-body">
              <Link to={post.href} className="blog-row-title">
                {post.title}
              </Link>
              <p className="blog-row-excerpt">{post.excerpt}</p>
              <div className="blog-tags">
                <span className="pill">Security</span>
              </div>
            </div>
          </article>
        ))}

        {totalPages > 1 && (
          <div className="blog-pagination">
            <button
              className="pill"
              disabled={page === 1}
              onClick={() => onPageChange?.(Math.max(1, page - 1))}
            >
              Previous
            </button>
            <span className="blog-page-indicator">
              Page {page} of {totalPages}
            </span>
            <button
              className="pill"
              disabled={page === totalPages}
              onClick={() => onPageChange?.(Math.min(totalPages, page + 1))}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
