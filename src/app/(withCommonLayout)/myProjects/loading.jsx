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
      <div className="space-y-2 animate-pulse">
        <div className="h-7 w-48 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
        <div className="space-y-2">
          <div className="h-4 w-[70%] bg-gray-200 dark:bg-gray-700 rounded-md"></div>
          <div className="h-4 w-[60%] bg-gray-200 dark:bg-gray-700 rounded-md"></div>
          <div className="h-4 w-[50%] bg-gray-200 dark:bg-gray-700 rounded-md"></div>
        </div>
        <div className="h-5 w-32 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
        <div className="w-full md:h-[80vh] h-64 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-2 mt-4">
            <div className="h-5 w-20 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
            <div className="flex items-center gap-3 ml-4 overflow-hidden">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 h-12 border rounded-xl bg-white dark:bg-gray-500"
                >
                  <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
                  <div className="h-4 w-16 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-8 w-28 bg-gray-300 dark:bg-gray-600 rounded-xl"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
