const Loading = () => {
  return (
    <section
      className={`relative transition-all duration-300 w-full h-screen border border-gray-400 dark:border-gray-700 animate-pulse`}
    >
      <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-md"></div>
    </section>
  );
};

export default Loading;
