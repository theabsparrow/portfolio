import FeaturedBlogSkeleton from "@/component/skeleton/FeaturedBlogSkeleton";

const AllBlogLoadingPage = () => {
  return (
    <section className="mt-20 space-y-6">
      {/* Header skeleton */}
      <div className="space-y-4 animate-pulse">
        <div className="h-12 w-56 mx-auto bg-gray-300 dark:bg-gray-700 rounded-md" />

        <div className="h-10 w-[80%] md:w-[60%] mx-auto bg-gray-300 dark:bg-gray-700 rounded-md" />

        <div className="space-y-2 max-w-3xl mx-auto">
          <div className="h-5 w-full bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-5 w-[90%] mx-auto bg-gray-300 dark:bg-gray-700 rounded" />
        </div>
      </div>

      <hr className="dark:border-gray-400 border-gray-700" />

      {/* Blog section skeleton */}
      <section className="space-y-6 animate-pulse">
        <div className="h-10 w-44 bg-gray-300 dark:bg-gray-700 rounded-md" />

        <div className="h-10 w-40 bg-gray-300 dark:bg-gray-700 rounded-md" />

        <div className="space-y-4">
          <FeaturedBlogSkeleton />
          <FeaturedBlogSkeleton />
          <FeaturedBlogSkeleton />
        </div>
      </section>
    </section>
  );
};

export default AllBlogLoadingPage;
