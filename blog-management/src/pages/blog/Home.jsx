import React, { useEffect, useState } from "react";
import Layout from "../../components/navbar/layout/Layout";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import Cards from "./components/cards/Cards";

const baseUrl = "https://react30.onrender.com/api/user";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get(`${baseUrl}/blog`);
    if (response.status === 200) {
      setBlogs(response.data.data);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <Layout>
        <Navbar />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 mt-8">
          {blogs.length > 0 &&
            blogs.map((blog) => <Cards key={blog._id} blog={blog} />)}
        </div>
      </Layout>
    </>
  );
};

export default Home;
