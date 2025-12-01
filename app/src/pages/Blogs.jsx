import { useState } from "react";
import BlogIntro from "../components/BlogIntro";
import BlogList from "../components/BlogList";
import BlogSearch from "../components/BlogSearch";
import { blogIntro, blogs } from "../data/content";

export default function BlogsPage() {
  const [filtered, setFiltered] = useState(blogs);

  return (
    <>
      <BlogIntro data={blogIntro} />
      <div className="container blog-controls">
        <BlogSearch posts={blogs} onFilter={setFiltered} />
      </div>
      <BlogList posts={filtered} />
    </>
  );
}
