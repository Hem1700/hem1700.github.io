export default function BlogList({ posts }) {
  return (
    <section className="blog-list-section">
      <div className="container text-center">
        {posts.map((post) => (
          <article className="blog-card" key={post.title}>
            <a href={post.href}>
              <h2 className="blog-title">{post.title}</h2>
            </a>
            <p className="blog-excerpt">{post.excerpt}</p>
            <p className="blog-meta">
              <span>{post.date}</span> · <span>{post.readTime}</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
