import { useState } from "react";

const Form = ({ type, onSubmit }) => {
  const [data, setData] = useState({
    title: "",
    description: "",
    image: null,
    category: "",
    subtitle: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: name === "image" ? e.target.files[0] : value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(data);
  }

  return (
    <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg shadow p-6 dark:bg-gray-800 dark:border-gray-700">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        {type} Blog
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="blogTitle"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          ></label>
          <input
            onChange={handleChange}
            name="title"
            type="text"
            id="blogTitle"
            placeholder="Enter blog title"
            value={data.title}
            className="block w-full p-2.5 text-sm border rounded-lg bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="blogDescription"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Blog Description
          </label>
          <textarea
            onChange={handleChange}
            name="description"
            id="blogDescription"
            rows="4"
            placeholder="Write your blog description here..."
            value={data.description}
            className="block w-full p-2.5 text-sm border rounded-lg bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="fileUpload"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Upload File (e.g., cover image)
          </label>
          <input
            onChange={handleChange}
            name="image"
            type="file"
            id="fileUpload"
            className="block w-full text-sm text-gray-900 border rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:bg-gray-700 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Category
          </label>
          <input
            onChange={handleChange}
            name="subtitle"
            type="text"
            id="subtitle"
            placeholder="Enter blog subtitle"
            value={data.subtitle}
            className="block w-full p-2.5 text-sm border rounded-lg bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Subtitle
          </label>
          <input
            onChange={handleChange}
            name="category"
            type="text"
            id="category"
            placeholder="Enter blog category"
            value={data.category}
            className="block w-full p-2.5 text-sm border rounded-lg bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          disabled={
            !data.title ||
            !data.description ||
            !data.category ||
            !data.image ||
            !data.subtitle
          }
          className="w-full px-4 py-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {type} Blog
        </button>
      </form>
    </div>
  );
};

export default Form;
