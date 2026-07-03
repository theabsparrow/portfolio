import ProjectComponent from "@/component/recentProject/ProjectComponent";
import { projects } from "@/component/recentProject/recentProject.const";
import { GrProjects } from "react-icons/gr";

const page = () => {
  return (
    <section className="mt-20 space-y-4">
      <div className="space-y-4">
        <h1 className="text-3xl lg:text-5xl font-semibold lg:font-bold flex items-center gap-10 justify-center">
          Projects I've Built
          <span className="hidden md:flex text-4xl">
            <GrProjects />
          </span>
        </h1>
        <p className="lg:text-lg text-center max-w-3xl mx-auto font-medium">
          Here you'll find a collection of projects that highlight my experience
          in web development, design, and problem-solving. Each project reflects
          my attention to detail, passion for clean code, and ability to bring
          ideas to life with modern technologies.
        </p>
      </div>
      <hr className=" dark:border-gray-400 border-gray-700" />
      <ProjectComponent MyProjects={projects} />
    </section>
  );
};

export default page;
