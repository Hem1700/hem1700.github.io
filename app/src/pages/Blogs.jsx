import { useState } from "react";
import BlogIntro from "../components/BlogIntro";
import BlogList from "../components/BlogList";
import BlogSearch from "../components/BlogSearch";
import { blogIntro, blogs } from "../data/content";

export default function BlogsPage() {
  const [filteredPosts, setFilteredPosts] = useState(blogs);

  return (
    <>
      <BlogIntro data={blogIntro} />
      <section className="section">
        <div className="container">
          <BlogSearch posts={blogs} onFilter={setFilteredPosts} />
          <BlogList posts={filteredPosts} wrap={false} />
        </div>
      </section>
    </>
  );
}
