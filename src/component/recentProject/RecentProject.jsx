"use client";

import { GrProjects } from "react-icons/gr";
import { projects } from "./recentProject.const";
import ProjectComponent from "./ProjectComponent";
import Link from "next/link";

const RecentProject = () => {
  const pairProjects = projects.slice(0, 2);
  return (
    <section>
      <div className="space-y-4">
        <h1 className="text-3xl md:text-5xl font-semibold md:font-bold flex items-center md:gap-10 justify-center">
          My Recent Projects
          <span className="hidden md:flex">
            <GrProjects />
          </span>
        </h1>
        <p className="md:text-lg text-center max-w-3xl mx-auto font-medium">
          Here are some of the projects I’ve recently built, showcasing my
          skills in full-stack web development. Each project reflects my
          approach to clean code, responsive design, and building user-focused
          applications. For more visit my Github
        </p>
      </div>
      <hr className="my-10 dark:border-gray-400 border-gray-700" />
      <ProjectComponent MyProjects={pairProjects} />
      <div className="flex flex-col items-center gap-4 mt-8">
        <p>Want to see more?</p>
        <Link
          href="/myProjects"
          className="md:text-lg p-1 md:p-2 flex items-center gap-1 md:gap-2 bg-gray-400 hover:bg-gray-500 text-gray-900 rounded-lg font-semibold md:hover:gap-3 duration-500"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
};

export default RecentProject;
