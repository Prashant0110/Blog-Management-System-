import React from "react";
import Layout from "../../components/navbar/layout/Layout";
import Form from "./components/form/Form";
import axios from "axios";
import baseUrl from "../../config";
const AddBlog = () => {
  async function handleBlog() {
    const response = await axios.post(`${baseUrl}/blog`, data);
    if (response.status === 201) {
      navigate("/");
    }
  }
  return (
    <>
      <Layout>
        <Form type="Add" onSubmit={handleBlog} />
      </Layout>
    </>
  );
};

export default AddBlog;
