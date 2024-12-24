import Form from "./components/form/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/navbar/layout/Layout";
import baseUrl from "../../config";

const AddBlog = () => {
  const navigate = useNavigate();

  const handleCreateBlog = async (data) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login first");
        navigate("/login");
        return;
      }

      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("image", data.image);
      formData.append("category", data.category);
      formData.append("subtitle", data.subtitle);

      const response = await axios.post(`${baseUrl}/user/blog`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token,
        },
      });

      if (response.status === 201) {
        alert("Blog created successfully!");
        navigate("/");
      }
    } catch (error) {
      console.error("Full error:", error.response);
      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        alert("Session expired. Please login again.");
        navigate("/login");
      } else {
        alert(error?.response?.data?.message || "An error occurred");
      }
    }
  };

  return (
    <Layout>
      <Form type="Create" onSubmit={handleCreateBlog} />
    </Layout>
  );
};

export default AddBlog;
