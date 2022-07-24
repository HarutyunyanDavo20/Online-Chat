import React, { useState } from "react";
import Login from "./Login";
import "./LoginPage.scss";
import Register from "./Register";

const LoginPage = () => {
  const [situation, setSituation] = useState(false);

  const change = () => {
    setSituation(!situation);
  };

  return (
    <div id="login-form">
      {situation ? <Register change={change} /> : <Login change={change} />}
    </div>
  );
};

export default LoginPage;
