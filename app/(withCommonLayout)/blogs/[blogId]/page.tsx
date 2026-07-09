import BlogDetails from "@/component/blogDetails/BlogDetails";
import { blogs, TBlogs } from "@/const/blog.const";

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const blogData = blogs.find((blog) => blog.id === blogId);
  return (
    <section className="mt-20 space-y-4">
      <BlogDetails blogData={blogData as TBlogs} />
    </section>
  );
};

export default BlogDetailsPage;
