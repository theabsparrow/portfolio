const ProjectSkeleton = () => {
  return (
    <div className="space-y-4 animate-pulse">
      {/* Project title */}
      <div className="h-9 w-64 bg-gray-300 dark:bg-gray-700 rounded-md" />

      {/* Description */}
      <div className="space-y-2 md:w-[50vw]">
        <div className="h-5 w-full bg-gray-300 dark:bg-gray-700 rounded" />
        <div className="h-5 w-[80%] bg-gray-300 dark:bg-gray-700 rounded" />
      </div>

      {/* Date */}
      <div className="h-6 w-44 bg-gray-300 dark:bg-gray-700 rounded" />

      {/* Project Image / Swiper */}
      <div className="w-full h-[40vh] md:h-[80vh] bg-gray-300 dark:bg-gray-700 rounded-xl" />

      {/* Technology */}
      <div className="flex items-center gap-2 mt-4">
        <div className="h-6 w-28 bg-gray-300 dark:bg-gray-700 rounded" />

        <div className="flex gap-4 overflow-hidden">
          <div className="h-12 w-32 border rounded-xl bg-gray-300 dark:bg-gray-700" />
          <div className="h-12 w-32 border rounded-xl bg-gray-300 dark:bg-gray-700" />
          <div className="h-12 w-32 border rounded-xl bg-gray-300 dark:bg-gray-700" />
        </div>
      </div>

      {/* Mobile technology */}
      <div className="md:hidden flex gap-3">
        <div className="h-8 w-24 rounded-xl bg-gray-300 dark:bg-gray-700" />
        <div className="h-8 w-24 rounded-xl bg-gray-300 dark:bg-gray-700" />
        <div className="h-8 w-24 rounded-xl bg-gray-300 dark:bg-gray-700" />
      </div>

      {/* Links */}
      <div className="flex items-center justify-between">
        <div className="h-9 w-32 border rounded-xl bg-gray-300 dark:bg-gray-700" />
        <div className="h-9 w-32 border rounded-xl bg-gray-300 dark:bg-gray-700" />
        <div className="h-9 w-32 border rounded-xl bg-gray-300 dark:bg-gray-700" />
      </div>
    </div>
  );
};

export default ProjectSkeleton;
