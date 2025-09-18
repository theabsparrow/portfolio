import React from "react";

const Loading = () => {
  return (
    <section className="space-y-16">
      <div className="space-y-4 animate-pulse">
        <div className="flex items-center gap-10 justify-center">
          <div className="h-8 lg:h-12 w-60 lg:w-96 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
          <div className="hidden md:flex h-10 w-10 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
        </div>
        <div className="space-y-2 max-w-3xl mx-auto">
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-md"></div>
          <div className="h-4 w-11/12 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
          <div className="h-4 w-10/12 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
        </div>
      </div>
      <div className="space-y-6 animate-pulse">
        <div className="h-8 w-40 md:w-52 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
        <div className="h-10 w-40 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
        <div className="space-y-4">
          {[...Array(3)].map((_, idx) => (
            <div
              key={idx}
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg space-y-3"
            >
              <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-md"></div>
                <div className="h-4 w-11/12 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-4 w-20 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
                <div className="h-4 w-16 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Loading;
