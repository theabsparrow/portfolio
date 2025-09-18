"use client";

import { useState } from "react";
import { blogs, featuredBlogs, nonFeaturedBlogs } from "./blog.const";
import FeaturedBlogComponent from "./FeaturedBlogComponent";
import NonFeaturedComponent from "./NonFeaturedComponent";

const BlogComponent = () => {
  const [featured, setFeatured] = useState(true);
  return (
    <section className="space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold">
        All Posts <span className="text-blue-700">.</span>
      </h1>
      <div>
        <select
          value={featured}
          onChange={(e) => {
            const value = e.target.value;
            if (value === "false") {
              setFeatured(false);
            } else {
              setFeatured(true);
            }
          }}
          className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-900 text-sm font-medium text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 outline-none"
        >
          <option value={true}>Featured</option>
          <option value={false}>Non-Featured</option>
        </select>
      </div>
      <div className="space-y-4">
        {featured
          ? featuredBlogs.map((blog, index) => (
              <FeaturedBlogComponent
                key={blog.id}
                blog={blog}
                isLatest={index === 0}
              />
            ))
          : nonFeaturedBlogs.map((blog) => (
              <NonFeaturedComponent key={blog.id} blog={blog} />
            ))}
      </div>
    </section>
  );
};

export default BlogComponent;
