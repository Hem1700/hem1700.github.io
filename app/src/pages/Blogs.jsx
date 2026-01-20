import { useEffect, useMemo, useState } from "react";
import BlogIntro from "../components/BlogIntro";
import BlogList from "../components/BlogList";
import BlogSearch from "../components/BlogSearch";
import { blogIntro, blogs } from "../data/content";

const BLOG_CATEGORIES = [
  {
    label: "Research Papers",
    description: "Deep dives, lab notes, and long-form investigations.",
    emptyMessage: "No research posts yet.",
  },
  {
    label: "CVEs/Libraries",
    description: "Vulnerability writeups, protocol flaws, and library risks.",
    emptyMessage: "No CVE or library posts yet.",
  },
  {
    label: "HackTheBox/Bug Bounty",
    description: "CTF notes and real-world bug bounty reports.",
    emptyMessage: "No HackTheBox or bug bounty posts yet.",
  },
];

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState(BLOG_CATEGORIES[0].label);
  const basePosts = useMemo(
    () => blogs.filter((post) => post.category === activeCategory),
    [activeCategory]
  );
  const [filteredPosts, setFilteredPosts] = useState(basePosts);
  const activeMeta = BLOG_CATEGORIES.find((category) => category.label === activeCategory);

  useEffect(() => {
    setFilteredPosts(basePosts);
  }, [basePosts]);

  return (
    <>
      <BlogIntro data={blogIntro} />
      <section className="section">
        <div className="container">
          <div className="blog-category-grid">
            {BLOG_CATEGORIES.map((category) => {
              const count = blogs.filter((post) => post.category === category.label).length;
              return (
                <button
                  key={category.label}
                  type="button"
                  className={`blog-category-card ${activeCategory === category.label ? "active" : ""}`}
                  onClick={() => setActiveCategory(category.label)}
                >
                  <div className="blog-category-eyebrow">Category</div>
                  <h3 className="blog-category-title">{category.label}</h3>
                  <p className="blog-category-desc">{category.description}</p>
                  <div className="blog-category-meta">
                    <span className="pill">{count} posts</span>
                  </div>
                </button>
              );
            })}
          </div>

          <BlogSearch posts={basePosts} onFilter={setFilteredPosts} />

          <div className="blog-category-results">
            <div className="section-header">
              <div>
                <h2 className="section-title">{activeCategory}</h2>
              </div>
            </div>
            {basePosts.length === 0 ? (
              <p className="text-muted">{activeMeta?.emptyMessage}</p>
            ) : filteredPosts.length === 0 ? (
              <p className="text-muted">No posts match that search.</p>
            ) : (
              <BlogList posts={filteredPosts} wrap={false} />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
