import React from "react";
import Layout from "../../../../components/navbar/layout/Layout";

const Form = () => {
  return (
    <>
      <Layout>
        <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg shadow p-6 dark:bg-gray-800 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Add Blog
          </h2>
          <form>
            {/* Blog Title */}
            <div className="mb-4">
              <label
                htmlFor="blogTitle"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Blog Title
              </label>
              <input
                type="text"
                id="blogTitle"
                placeholder="Enter blog title"
                className="block w-full p-2.5 text-sm border rounded-lg bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Blog Description */}
            <div className="mb-4">
              <label
                htmlFor="blogDescription"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Blog Description
              </label>
              <textarea
                id="blogDescription"
                rows="4"
                placeholder="Write your blog description here..."
                className="block w-full p-2.5 text-sm border rounded-lg bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            {/* Upload File */}
            <div className="mb-4">
              <label
                htmlFor="fileUpload"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Upload File (e.g., cover image)
              </label>
              <input
                type="file"
                id="fileUpload"
                className="block w-full text-sm text-gray-900 border rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:bg-gray-700 focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add Blog
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Form;
