import React from "react";
import Layout from "../../components/navbar/layout/Layout";
import Form from "./components/form/Form";
const AddBlog = () => {
  return (
    <>
      <Layout>
        <Form type="Add" />
      </Layout>
    </>
  );
};

export default AddBlog;
