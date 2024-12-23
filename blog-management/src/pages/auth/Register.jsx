import React from "react";
import Form from "./component/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseUrl = "https://react30.onrender.com/api/user";
console.log("baseUrl:", baseUrl); // Log the baseUrl variable here

const Register = () => {
  const navigate = useNavigate();

  // Using async/await properly
  async function handleRegister(data) {
    console.log("Data being sent to register API:", data);

    try {
      // Send registration data using axios
      const response = await axios.post(`${baseUrl}/register`, data);

      if (response.status === 201) {
        console.log("Registration successful, navigating to login page...");
        navigate("/login");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert(error?.response?.data?.message || "Something went wrong");
    }
  }

  return (
    <>
      <Form type="Register" onSubmit={handleRegister} />
    </>
  );
};

export default Register;
