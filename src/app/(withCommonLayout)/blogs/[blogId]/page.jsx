import { blogs } from "@/component/blogComponent/blog.const";
import SingleBlogComponent from "@/component/blogComponent/SingleBlogComponent";

const BlogId = async ({ params }) => {
  const { blogId } = await params;
  const blogData = blogs.find((blog) => blog.id === blogId);
  return (
    <section className="md:px-56 px-4 mt-24 md:mt-28 space-y-4">
      <SingleBlogComponent blogData={blogData} />
    </section>
  );
};

export default BlogId;
