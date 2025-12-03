import React, { useState } from "react";
import { useGetAllBlogsQuery } from "@/app/redux/api/blogApi";

export default function BlogListing() {
  const { data, error, isLoading } = useGetAllBlogsQuery();

  // State for the selected filter
  const [selectedFilter, setSelectedFilter] = useState("All");

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg font-semibold text-gray-500 animate-pulse">
          Loading blogs...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg font-semibold text-red-500">
          Failed to load blogs. Please try again later.
        </p>
      </div>
    );

  // Get the list of blogs
  const blogs = data?.blog_list ?? [];

  // Filter blogs based on selected filter
  const filteredBlogs = selectedFilter === "All"
    ? blogs
    : blogs.filter(blog => blog.blog_service === selectedFilter);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">
        Latest Blogs
      </h2>

      {/* Dropdown for selecting a filter */}
      <div className="flex justify-center mb-8">
        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded-md shadow-sm"
        >
          <option value="All">All</option>
          <option value="digital">Digital</option>
          <option value="branding">Branding</option>
          {/* Add more filter options as necessary */}
        </select>
      </div>

      {/* Display filtered blogs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.map((blog: any) => (
          <div
            key={blog.blog_id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={blog.blog_thumb_image}
                alt={blog.blog_title}
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 line-clamp-2">
                {blog.blog_title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                {blog.blog_small_description || blog.blog_description.replace(/<[^>]*>/g, '').substring(0, 200)}
              </p>

              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
