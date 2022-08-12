import React, { useState } from "react";
import Login from ".";
import "./LoginPage.scss";
import Register from "./Register";

const LoginPage = () => {
  const [situation, setSituation] = useState(false);

  const changeSituation = () => setSituation(!situation)

  return (
    <div id="login-form">
      {situation ? <Register change={changeSituation} /> : <Login change={changeSituation} />}
    </div>
  );
};

export default LoginPage;
