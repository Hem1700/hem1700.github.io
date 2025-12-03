import { useState, useMemo } from "react";

export default function BlogSearch({ posts, onFilter }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return posts;
    return posts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase()) || post.excerpt.toLowerCase().includes(query.toLowerCase()));
  }, [query, posts]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    onFilter(filtered);
  };

  return (
    <div className="blog-search">
      <label className="search-label" htmlFor="blog-search">
        Search posts
      </label>
      <div className="search-shell">
        <i className="fas fa-search search-icon" aria-hidden="true" />
        <input
          id="blog-search"
          type="search"
          value={query}
          onChange={handleChange}
          placeholder="Type a keyword…"
          className="search-input"
        />
      </div>
    </div>
  );
}
