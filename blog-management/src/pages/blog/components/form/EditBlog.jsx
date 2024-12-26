import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditBlog = () => {
  console.log("EditBlog component rendered");

  const { id } = useParams();
  console.log("Blog ID:", id);

  const navigate = useNavigate();
  const [blog, setBlog] = useState({
    title: "",
    subtitle: "",
    description: "",
    image: null,
  });
  console.log("Initial blog state:", blog);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");
  console.log("Token:", token);

  useEffect(() => {
    console.log("useEffect hook called");
    const fetchBlog = async () => {
      try {
        console.log("Fetching blog data...");
        const response = await axios.get(
          `https://react30.onrender.com/api/user/blog/${id}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log("Blog data received:", response.data);
        setBlog(response.data.data);
      } catch (err) {
        console.error("Error fetching blog data:", err);
        setError("Failed to load blog for editing.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id, token]);

  console.log("Blog state after useEffect:", blog);

  const handleChange = (e) => {
    console.log("handleChange called");
    const { name, value, files } = e.target;
    setBlog({ ...blog, [name]: name === "image" ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    console.log("handleSubmit called");
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", blog.title);
    formData.append("subtitle", blog.subtitle);
    formData.append("description", blog.description);
    if (blog.image) formData.append("image", blog.image);

    try {
      console.log("Updating blog...");
      await axios.put(
        `https://react30.onrender.com/api/user/blog/${id}`,
        formData,
        {
          headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Blog updated successfully!");
      navigate("/");
    } catch (err) {
      console.error("Error updating blog:", err);
      setError("Failed to update blog. Please try again.");
    }
  };

  console.log("Rendered component");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Edit Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={blog.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subtitle" className="block text-gray-700">
            Subtitle
          </label>
          <input
            type="text"
            id="subtitle"
            name="subtitle"
            value={blog.subtitle}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={blog.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700">
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
