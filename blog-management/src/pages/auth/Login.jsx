import React from "react";
import Form from "./component/Form";
const Login = () => {
  return (
    <>
      <Form type="Login" onSubmit={handleLogin} />
    </>
  );
};

export default Login;
