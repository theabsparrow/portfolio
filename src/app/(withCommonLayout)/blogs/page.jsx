import BlogComponent from "@/component/blogComponent/BlogComponent";
export const metadata = {
  title: "Blogs - Abul Bashar",
  description:
    "Here the blogs about development or coding related is published here. This is full responsible for blogging",
};
const BlogPage = () => {
  return (
    <section className="mt-20 space-y-4">
      <div className="space-y-4">
        <h1 className="text-3xl lg:text-5xl font-semibold lg:font-bold flex items-center gap-2 justify-center">
          Tech Blog <span className="text-blue-700">.</span>
        </h1>
        <h1 className="text-2xl md:text-3xl font-bold flex items-center justify-center">
          Thoughts, Tutorials & Insights from a Developer’s Lens
        </h1>
        <p className="lg:text-lg text-center max-w-3xl mx-auto font-medium">
          A collection of developer-focused articles where I share practical
          guides, project experiences, and emerging trends in full-stack
          development.
        </p>
      </div>
      <hr className=" dark:border-gray-400 border-gray-700" />
      <BlogComponent />
    </section>
  );
};

export default BlogPage;
