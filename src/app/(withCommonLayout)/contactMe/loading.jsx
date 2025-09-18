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
      <div className="animate-pulse">
        <form className="dark:bg-[#161617] border border-gray-400 p-6 rounded-xl space-y-3">
          <div className="flex flex-col md:flex-row md:justify-between md:gap-10 space-y-4 md:space-y-0 items-center">
            <div className="w-full space-y-2">
              <div className="h-5 w-16 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
              <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded-md"></div>
            </div>

            <div className="w-full space-y-2">
              <div className="h-5 w-16 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
              <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded-md"></div>
            </div>
          </div>

          <div className="w-full space-y-2">
            <div className="h-5 w-20 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
            <div className="h-28 w-full bg-gray-200 dark:bg-gray-700 rounded-md"></div>
          </div>
          <div className="flex justify-end">
            <div className="h-10 w-28 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
          </div>
        </form>
        <div className="fixed inset-0 hidden" id="modal-skeleton">
          <div className="absolute inset-0 bg-black/60 dark:bg-white/20 backdrop-blur-sm" />
          <div className="relative z-20 flex items-center justify-center">
            <div className="w-80 md:w-[28rem] h-48 md:h-60 bg-gray-200 dark:bg-gray-700 rounded-xl shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
