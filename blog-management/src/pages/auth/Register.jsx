import React from "react";
import Form from "./component/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import baseUrl from "../../config";
const Register = () => {
  const navigate = useNavigate();
  async function handleRegister(data) {
    try {
      await axios.post(`${baseUrl}/register`, data).then((response) => {
        if (response.status === 201) {
          navigate("/login");
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
      <Form type="Register" onSubmit={handleRegister} />
    </>
  );
};

export default Register;
