import React from "react";
import { useForm } from "react-hook-form";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import "./Register.scss";

const Register = ({ change }) => {
  const {
    register,
    formState: { isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const onRegister = data => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.pass)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: data.name,
        });
      })
      .catch(err => alert(err));
  };
  return (
    <form
      id="register-content"
      autoComplete="off"
      onSubmit={handleSubmit(onRegister)}
    >
      <input placeholder="name" {...register("name", { required: true, maxLength: 15 })} />
      <input placeholder="email" {...register("email", { required: true })} />
      <input
        type="password"
        placeholder="password"
        {...register("pass", { required: true })}
      />
      <button id="create" disabled={!isValid}>
        Create
      </button>

      <button onClick={change}>Login</button>
    </form>
  );
};

export default Register;
