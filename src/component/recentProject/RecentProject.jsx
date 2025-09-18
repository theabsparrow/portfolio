"use client";

import { GrProjects } from "react-icons/gr";
import { projects } from "./recentProject.const";
import ProjectComponent from "./ProjectComponent";
import Link from "next/link";

const RecentProject = () => {
  const pairProjects = projects.slice(0, 2);
  return (
    <section className="space-y-4">
      <div className="space-y-4">
        <h1 className="text-3xl lg:text-5xl font-semibold lg:font-bold flex items-center gap-10 justify-center">
          My Recent Projects
          <span className="hidden md:flex text-4xl">
            <GrProjects />
          </span>
        </h1>
        <p className="lg:text-lg text-center max-w-3xl mx-auto font-medium">
          Here are some of the projects I’ve recently built, showcasing my
          skills in full-stack web development. Each project reflects my
          approach to clean code, responsive design, and building user-focused
          applications. For more visit my Github
        </p>
      </div>
      <hr className=" dark:border-gray-400 border-gray-700" />
      <ProjectComponent MyProjects={pairProjects} />
      <div className="flex flex-col items-center gap-2">
        <p>Want to see more?</p>
        <Link
          href="/myProjects"
          className="lg:text-lg p-1 lg:p-2 bg-gray-400 hover:bg-gray-500 text-gray-900 rounded-lg font-semibold duration-500"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
};

export default RecentProject;
