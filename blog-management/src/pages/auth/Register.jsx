import React from "react";
import Form from "./component/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  async function handleRegister(data) {
    try {
      await axios
        .post("https://react30.onrender.com/api/user/register", data)
        .then((response) => {
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
