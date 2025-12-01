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
      <input
        type="search"
        value={query}
        onChange={handleChange}
        placeholder="Search posts..."
        className="search-input"
      />
    </div>
  );
}
