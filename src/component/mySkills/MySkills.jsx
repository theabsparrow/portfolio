"use client";
import { FaToolbox } from "react-icons/fa";
import CoreSkills from "./CoreSkills";
import UsedTechnology from "./UsedTechnology";

const MySkills = () => {
  return (
    <section className="space-y-10">
      <h1 className="text-3xl lg:text-5xl font-semibold lg:font-bold gap-6 flex items-center justify-center">
        My Development Toolbox{" "}
        <span className="hidden md:flex text-4xl">
          <FaToolbox />
        </span>
      </h1>

      <CoreSkills />
      <UsedTechnology />
    </section>
  );
};

export default MySkills;
