import { useState } from "react";
import BlogIntro from "../components/BlogIntro";
import BlogList from "../components/BlogList";
import BlogSearch from "../components/BlogSearch";
import { blogIntro, blogs } from "../data/content";

export default function BlogsPage() {
  const [filtered, setFiltered] = useState(blogs);
  const [page, setPage] = useState(1);
  const pageSize = 1;

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageItems = filtered.slice((page - 1) * pageSize, page * pageSize);

  const handleFilter = (items) => {
    setFiltered(items);
    setPage(1);
  };

  return (
    <>
      <BlogIntro data={blogIntro} />
      <div className="container blog-controls">
        <BlogSearch posts={blogs} onFilter={handleFilter} />
      </div>
      <BlogList
        posts={pageItems}
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </>
  );
}
