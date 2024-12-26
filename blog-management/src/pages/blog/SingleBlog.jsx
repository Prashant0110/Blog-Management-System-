import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/navbar/layout/Layout";
import { Link, useParams } from "react-router-dom";

const SingleBlog = () => {
  const baseUrl = "https://react30.onrender.com/api/user";
  const { id } = useParams();

  // State management
  const [blog, setBlog] = useState(null); // Blog data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${baseUrl}/blog/${id}`);
        if (response.status === 200) {
          setBlog(response.data.data);
        } else {
          throw new Error("Failed to fetch blog data");
        }
      } catch (err) {
        console.error("API Error:", err);
        setError("Failed to load blog. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  // Handle loading and error states
  if (loading) {
    return (
      <Layout>
        <div className="bg-gray-100 dark:bg-gray-800 py-8 text-center">
          Loading...
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="bg-gray-100 dark:bg-gray-800 py-8 text-center text-red-500">
          {error}
        </div>
      </Layout>
    );
  }

  if (!blog) {
    return (
      <Layout>
        <div className="bg-gray-100 dark:bg-gray-800 py-8 text-center">
          No blog found.
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={blog.imageUrl}
                  alt="Blog Image"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <Link to={`/blog/${id}/edit`}>
                    <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                      Edit
                    </button>
                  </Link>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {blog.subtitle}
              </p>

              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Product Description:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {blog.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleBlog;
