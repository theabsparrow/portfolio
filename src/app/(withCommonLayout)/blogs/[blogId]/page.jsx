import { blogs } from "@/component/blogComponent/blog.const";
import SingleBlogComponent from "@/component/blogComponent/SingleBlogComponent";

export const generateMetadata = async ({ params }) => {
  const { blogId } = await params;
  const blogData = blogs.find((blog) => blog.id === blogId);
  if (!blogData) {
    return {
      title: "Blog not found - Abul bashar",
      description: "Sorry, this blog could not be found.",
    };
  }

  return {
    title: `${blogData?.title} - Abul Bashar`,
    description: blogData?.description || "Discover this blog on Daily Dish.",
  };
};

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
