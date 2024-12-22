import React from "react";
import Form from "./component/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  async function handleLogin(data) {
    try {
      await axios.post(`${baseUrl}/login`, data).then((response) => {
        if (response.status === 200) {
          navigate("/");
        } else {
          alert("Something went wrong");
        }
      });
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  }
  return (
    <>
      <Form type="Login" onSubmit={handleLogin} />
    </>
  );
};

export default Login;
