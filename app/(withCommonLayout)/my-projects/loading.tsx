import ProjectSkeleton from "@/component/skeleton/ProjectSkeleton";


const MyProjectsPageLoading = () => {
    return (
        <section className="mt-20 space-y-4">
      {/* Header */}
      <div className="space-y-4 animate-pulse">
        <div className="flex items-center justify-center gap-10">
          <div className="h-12 lg:h-16 w-80 bg-gray-300 dark:bg-gray-700 rounded-md" />

          {/* Project Icon */}
          <div className="hidden md:flex h-10 w-10 bg-gray-300 dark:bg-gray-700 rounded-full" />
        </div>


        {/* Description */}
        <div className="space-y-2 max-w-3xl mx-auto">
          <div className="h-5 w-full bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-5 w-[90%] mx-auto bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-5 w-[75%] mx-auto bg-gray-300 dark:bg-gray-700 rounded" />
        </div>
      </div>


      <hr className="dark:border-gray-400 border-gray-700" />


      {/* Projects */}
      <section className="space-y-16">
        <ProjectSkeleton />
        <ProjectSkeleton />
      </section>
    </section>
    );
};

export default MyProjectsPageLoading;