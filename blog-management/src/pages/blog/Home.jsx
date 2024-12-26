import React, { useEffect, useState } from "react";
import Layout from "../../components/navbar/layout/Layout";
import Cards from "./components/cards/Cards";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
const baseUrl = "https://react30.onrender.com/api";
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
        <div className="flex justify-center space-x-8 mt-8">
          {blogs.length > 0 &&
            blogs.map((blog) => {
              return <Cards key={blog._id} blog={blog} />;
            })}
        </div>
      </Layout>
    </>
  );
};

export default Home;
