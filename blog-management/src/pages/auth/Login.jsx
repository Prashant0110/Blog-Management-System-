import React from "react";
import Form from "./component/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseUrl = "https://react30.onrender.com/api/user";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}/user/login`, data);

      if (response.status === 200 && response?.data?.token) {
        // Store the complete token with Bearer prefix
        localStorage.setItem("token", response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error.response);
      alert(error?.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <Form type="Login" onSubmit={handleLogin} />
    </>
  );
};

export default Login;
