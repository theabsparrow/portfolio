import BlogComponent from "@/component/blogComponent/BlogComponent";

const page = () => {
  return (
    <section className="md:px-56 px-4 mt-24 md:mt-28 space-y-4">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          Tech Blog <span className="text-blue-700">.</span>
        </h1>
        <h1 className="text-2xl md:text-3xl font-bold">
          Thoughts, Tutorials & Insights from a Developer’s Lens
        </h1>
        <p className="text-lg">
          A collection of developer-focused articles where I share practical
          guides, project experiences, and emerging trends in full-stack
          development.
        </p>
      </div>
      <BlogComponent />
    </section>
  );
};

export default page;
