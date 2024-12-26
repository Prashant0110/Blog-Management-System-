import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ blog }) => {
  console.log(blog);
  return (
    <Link to={`/blog/${blog._id}`}>
      <div className="max-w-xs sm:max-w-sm lg:max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
        <div className="h-48 relative">
          <img
            className="w-full h-full object-cover"
            src={`${blog.imageUrl}`}
            alt="Blog Preview"
            onError={(e) => (e.target.style.display = "none")}
          />
        </div>
        <div className="p-4">
          <h5 className="text-xl font-bold text-gray-900 dark:text-white truncate">
            {blog.title}
          </h5>
          <p className="text-gray-700 dark:text-gray-400 mt-2 mb-4 text-sm truncate">
            {blog.subtitle}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {blog.category}
            </span>
            <svg
              className="w-3.5 h-3.5 text-gray-500 dark:text-gray-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
