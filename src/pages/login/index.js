import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import "./Login.scss";

const Login = ({ change }) => {
  const {
    register,
    formState: { isValid },
    handleSubmit
  } = useForm({
    mode: "onChange",
  });

  const onLogin = data => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, data.email,data.pass).catch((err)=> alert(err))
  }

  return (
    <form onSubmit={handleSubmit(onLogin)} id="login-content">
      <input placeholder="email" {...register("email", { required: true })} />
      <input
        placeholder="password"
        type="password"
        {...register("pass", { required: true })}
      />

      
      <button id="login" disabled={!isValid}>
        Login
      </button>
      <button type="button" onClick={change}>
        Create?
      </button>
    </form>
  );
};

export default Login;
