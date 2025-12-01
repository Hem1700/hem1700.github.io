import BlogIntro from "../components/BlogIntro";
import BlogList from "../components/BlogList";
import { blogIntro, blogs } from "../data/content";

export default function BlogsPage() {
  return (
    <>
      <BlogIntro data={blogIntro} />
      <BlogList posts={blogs} />
    </>
  );
}
