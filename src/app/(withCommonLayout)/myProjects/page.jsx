import ProjectComponent from "@/component/recentProject/ProjectComponent";
import { projects } from "@/component/recentProject/recentProject.const";
import { GrProjects } from "react-icons/gr";

const page = () => {
  return (
    <section className="md:px-56 px-4 mt-24 md:mt-28">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-5xl font-semibold md:font-bold flex items-center md:gap-10 justify-center">
          Projects I've Built
          <span className="hidden md:flex">
            <GrProjects />
          </span>
        </h1>
        <p className="md:text-lg text-center max-w-3xl mx-auto font-medium">
          Here you'll find a collection of projects that highlight my experience
          in web development, design, and problem-solving. Each project reflects
          my attention to detail, passion for clean code, and ability to bring
          ideas to life with modern technologies.
        </p>
      </div>
      <hr className="my-10 dark:border-gray-400 border-gray-700" />
      <ProjectComponent MyProjects={projects} />
    </section>
  );
};

export default page;
