import React from "react";
import Layout from "../../components/navbar/layout/Layout";
import Form from "../../pages/blog/components/form/Form";
import axios from "axios";
import baseUrl from "../../config";
import { useNavigate } from "react-router-dom";
const AddBlog = () => {
  const navigate = useNavigate();

  async function handleBlog(data) {
    try {
      const response = await axios.post(`${baseUrl}/blog`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      });
      if (response.status === 201) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  }

  return (
    <>
      <Layout>
        <Form type="Create" onSubmit={handleBlog} />
      </Layout>
    </>
  );
};

export default AddBlog;
