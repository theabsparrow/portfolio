import { blogs } from "@/component/blogComponent/blog.const";
import SingleBlogComponent from "@/component/blogComponent/SingleBlogComponent";

const BlogId = async ({ params }) => {
  const { blogId } = await params;
  const blogData = blogs.find((blog) => blog.id === blogId);
  return (
    <section className="mt-20 space-y-4">
      <SingleBlogComponent blogData={blogData} />
    </section>
  );
};

export default BlogId;
