"use client";

import Link from "next/link";
import { dateFormating } from "./blog.utills";
import { MdOutlineEventNote } from "react-icons/md";

const FeaturedBlogComponent = ({ blog, isLatest }) => {
  return (
    <section className="flex items-center gap-4">
      <div className="hidden md:flex flex-col items-center gap-2">
        <span className="p-2 bg-gray-800 rounded-full">
          <MdOutlineEventNote />
        </span>
        <div className="border-l-2 border-gray-400 h-[15vw]"></div>
      </div>
      <div className="py-4 px-4 md:px-8 dark:bg-[#161617] border border-gray-400 rounded-xl space-y-2">
        {isLatest && (
          <div className=" md:hidden flex">
            <span className="bg-gray-800 px-2 py-1 rounded-xl"> latest 🔥</span>
          </div>
        )}
        <div className="flex items-center md:gap-4">
          <h1 className="text-xl md:text-2xl font-bold">{blog.title}</h1>
          {isLatest && (
            <span className="bg-gray-800 px-1 md:px-2 py-1 rounded-xl hidden md:flex items-center gap-1">
              latest 🔥
            </span>
          )}
        </div>
        <div>
          <p className="dark:text-white/50 text-gray-700">
            {dateFormating(blog.createdAt)}
          </p>
          <p className="dark:text-white/50 text-gray-700">
            <span className="dark:text-white/80 text-gray-800">Author:</span>{" "}
            {blog.author}
          </p>
        </div>
        <p className="hidden md:block text-xl font-semibold">
          {blog.description}
        </p>
        <p className="md:hidden text-xl font-semibold">
          {blog.description.trim().split(/\s+/).slice(0, 10).join(" ")}...
        </p>
        <p className="hidden md:block">
          {blog.content.trim().split(/\s+/).slice(0, 30).join(" ")} ...
          <Link href={`/blogs/${blog.id}`} className="text-blue-600">
            read more
          </Link>
        </p>
        <p className="md:hidden">
          {blog.content.trim().split(/\s+/).slice(0, 20).join(" ")} ...
          <Link href={`/blogs/${blog.id}`} className="text-blue-600">
            read more
          </Link>
        </p>
      </div>
    </section>
  );
};

export default FeaturedBlogComponent;
