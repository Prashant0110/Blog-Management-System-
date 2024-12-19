import React from "react";
import Form from "./component/Form";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  async function handleLogin(data) {
    try {
      await axios
        .post("https://react30.onrender.com/api/user/login", data)
        .then((response) => {
          if (response.status === 200) {
            navigate("/home");
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
