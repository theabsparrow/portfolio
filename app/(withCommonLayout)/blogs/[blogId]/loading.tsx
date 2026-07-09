const BlogDetailsLoadingPage = () => {
  return (
    <section className="space-y-4 animate-pulse">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-3 w-full">
          {/* Title */}
          <div className="h-10 md:h-12 w-[80%] bg-gray-300 dark:bg-gray-700 rounded-md" />

          {/* Author + Date */}
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            {/* Desktop icon */}
            <div className="hidden md:flex p-2 bg-gray-300 dark:bg-gray-700 rounded-full">
              <div className="w-5 h-5 rounded-full bg-gray-400 dark:bg-gray-600" />
            </div>

            <div className="flex items-center gap-2">
              {/* Mobile icon */}
              <div className="md:hidden w-5 h-5 bg-gray-300 dark:bg-gray-700 rounded-full" />

              <div className="h-5 w-32 bg-gray-300 dark:bg-gray-700 rounded" />

              <div className="h-5 w-28 bg-gray-300 dark:bg-gray-700 rounded" />
            </div>
          </div>
        </div>

        {/* Word count + reading time */}
        <div className="flex gap-2">
          <div className="h-5 w-20 bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-5 w-24 bg-gray-300 dark:bg-gray-700 rounded" />
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        <div className="h-7 w-16 bg-gray-300 dark:bg-gray-700 rounded" />
        <div className="h-7 w-20 bg-gray-300 dark:bg-gray-700 rounded" />
        <div className="h-7 w-14 bg-gray-300 dark:bg-gray-700 rounded" />
        <div className="h-7 w-24 bg-gray-300 dark:bg-gray-700 rounded" />
      </div>

      {/* Description */}
      <div className="space-y-2">
        <div className="h-6 w-full bg-gray-300 dark:bg-gray-700 rounded" />
        <div className="h-6 w-[90%] bg-gray-300 dark:bg-gray-700 rounded" />
      </div>

      {/* Markdown Content */}
      <div className="space-y-4 mb-8">
        <div className="h-6 w-full bg-gray-300 dark:bg-gray-700 rounded" />
        <div className="h-6 w-[95%] bg-gray-300 dark:bg-gray-700 rounded" />
        <div className="h-6 w-[80%] bg-gray-300 dark:bg-gray-700 rounded" />

        <div className="h-8 w-[50%] bg-gray-300 dark:bg-gray-700 rounded mt-6" />

        <div className="h-6 w-full bg-gray-300 dark:bg-gray-700 rounded" />
        <div className="h-6 w-[85%] bg-gray-300 dark:bg-gray-700 rounded" />
        <div className="h-6 w-[70%] bg-gray-300 dark:bg-gray-700 rounded" />

        <div className="h-6 w-full bg-gray-300 dark:bg-gray-700 rounded" />
        <div className="h-6 w-[90%] bg-gray-300 dark:bg-gray-700 rounded" />
      </div>
    </section>
  );
};

export default BlogDetailsLoadingPage;
