import { useState } from "react";
import BlogIntro from "../components/BlogIntro";
import BlogList from "../components/BlogList";
import BlogSearch from "../components/BlogSearch";
import { blogIntro, blogs } from "../data/content";

export default function BlogsPage() {
  const [filteredPosts, setFilteredPosts] = useState(blogs);
  const categories = [
    {
      label: "Research Papers",
      emptyMessage: "No research posts yet.",
    },
    {
      label: "CVEs/Libraries",
      emptyMessage: "No CVE or library posts yet.",
    },
    {
      label: "HackTheBox/Bug Bounty",
      emptyMessage: "No HackTheBox or bug bounty posts yet.",
    },
  ];

  return (
    <>
      <BlogIntro data={blogIntro} />
      <section className="section">
        <div className="container">
          <BlogSearch posts={blogs} onFilter={setFilteredPosts} />
          {filteredPosts.length === 0 ? (
            <p className="text-muted">No posts match that search.</p>
          ) : (
            categories.map((category) => {
              const postsInCategory = filteredPosts.filter((post) => post.category === category.label);
              return (
                <div key={category.label} className="blog-category">
                  <div className="section-header">
                    <div>
                      <h2 className="section-title">{category.label}</h2>
                    </div>
                  </div>
                  {postsInCategory.length ? (
                    <BlogList posts={postsInCategory} wrap={false} />
                  ) : (
                    <p className="text-muted">{category.emptyMessage}</p>
                  )}
                </div>
              );
            })
          )}
        </div>
      </section>
    </>
  );
}
