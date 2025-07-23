"use client";

import { MdOutlineEventNote } from "react-icons/md";
import { dateFormating } from "./blog.utills";
import Markdown from "markdown-to-jsx";

const SingleBlogComponent = ({ blogData }) => {
  return (
    <section className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between">
        <div className="space-y-2">
          <h1 className="text-2xl md:text-4xl font-bold">{blogData?.title}</h1>
          <p className="flex flex-col md:flex-row md:items-center gap-2 text-lg">
            {" "}
            <span className="p-2 bg-gray-800 rounded-full hidden md:flex">
              <MdOutlineEventNote />
            </span>{" "}
            <span className="flex items-center gap-1">
              {" "}
              <MdOutlineEventNote className="md:hidden" /> {blogData?.author} /
            </span>{" "}
            <span> {dateFormating(blogData?.createdAt)}</span>
          </p>
        </div>
        <p>
          <span>Word {blogData?.content.trim().split(/\s+/).length} -</span>{" "}
          <span>{blogData?.readingTime}</span>
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {blogData?.tags.map((tag) => (
          <span key={tag} className="bg-gray-800 text-sm px-2 py-1 rounded">
            #{tag}
          </span>
        ))}
      </div>
      <p className="text-lg font-semibold">{blogData?.description}</p>
      <div className=" mb-8">
        <Markdown>{blogData.content}</Markdown>
      </div>
    </section>
  );
};

export default SingleBlogComponent;
