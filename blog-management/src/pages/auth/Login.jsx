import React from "react";
import Form from "./component/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseUrl = "https://react30.onrender.com/api/user";

const Login = () => {
  const navigate = useNavigate();

  async function handleLogin(data) {
    try {
      const response = await axios.post(`${baseUrl}/login`, data);

      if (response.status === 200 && response?.data?.token) {
        // Store token in localStorage
        localStorage.setItem("token", response.data.token);
        console.log("Login successful. Token:", response.data.token);

        // Navigate to the homepage
        navigate("/");
      } else {
        alert("Unexpected response from server. Please try again.");
      }
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "An error occurred during login.";
      console.error("Login error:", errorMessage);
      alert(`Error: ${errorMessage}`);
    }
  }

  return (
    <>
      <Form type="Login" onSubmit={handleLogin} />
    </>
  );
};

export default Login;
