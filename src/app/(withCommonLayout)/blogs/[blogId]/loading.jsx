const Loading = () => {
  return (
    <section className="space-y-4 animate-pulse">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="h-7 md:h-10 w-48 md:w-72 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-gray-300 dark:bg-gray-700 hidden md:flex"></div>
              <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
            </div>
            <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="h-5 w-28 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
          <div className="h-5 w-20 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="h-6 w-16 bg-gray-300 dark:bg-gray-700 rounded-md"
          ></div>
        ))}
      </div>
      <div className="h-5 w-3/4 bg-gray-300 dark:bg-gray-600 rounded-md"></div>

      <div className="space-y-3 mb-8">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-md"
          ></div>
        ))}
        <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
      </div>
    </section>
  );
};

export default Loading;
