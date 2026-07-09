const FeaturedBlogSkeleton = () => {
  return (
    <section className="flex items-center gap-4 animate-pulse">
      {/* Timeline section - Desktop only */}
      <div className="hidden md:flex flex-col items-center gap-2">
        <div className="p-2 bg-gray-300 dark:bg-gray-700 rounded-full">
          <div className="w-5 h-5 bg-gray-400 dark:bg-gray-600 rounded-full" />
        </div>

        <div className="border-l-2 border-gray-300 dark:border-gray-700 h-[15vw]" />
      </div>

      {/* Blog Card */}
      <div className="py-4 px-4 md:px-8 dark:bg-[#161617] bg-gray-100 border border-gray-300 dark:border-gray-700 rounded-xl space-y-4 w-full">
        {/* Mobile latest badge */}
        <div className="md:hidden flex">
          <div className="h-7 w-20 rounded-xl bg-gray-300 dark:bg-gray-700" />
        </div>

        {/* Title + latest */}
        <div className="flex items-center md:gap-4">
          <div className="h-7 md:h-8 w-[60%] bg-gray-300 dark:bg-gray-700 rounded-md" />

          {/* Desktop latest badge */}
          <div className="hidden md:flex h-7 w-20 bg-gray-300 dark:bg-gray-700 rounded-xl" />
        </div>

        {/* Date + Author */}
        <div className="space-y-2">
          <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-4 w-44 bg-gray-300 dark:bg-gray-700 rounded" />
        </div>

        {/* Description desktop */}
        <div className="hidden md:block space-y-2">
          <div className="h-5 w-full bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-5 w-[85%] bg-gray-300 dark:bg-gray-700 rounded" />
        </div>

        {/* Description mobile */}
        <div className="md:hidden space-y-2">
          <div className="h-5 w-full bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-5 w-[70%] bg-gray-300 dark:bg-gray-700 rounded" />
        </div>

        {/* Content desktop */}
        <div className="hidden md:block space-y-2">
          <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-4 w-[90%] bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-4 w-28 bg-gray-300 dark:bg-gray-700 rounded" />
        </div>

        {/* Content mobile */}
        <div className="md:hidden space-y-2">
          <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-4 w-[80%] bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogSkeleton;
