import React from "react";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import "./Register.scss";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Photo from "./img/davit.jpg";
import PhotoA from "../../components/menu/img/girl-user.png";

const Register = ({ change }) => {
  const {
    register,
    formState: { isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const addNewUser = async data => {
    const { email, gender, name } = data;

    await addDoc(collection(db, "users"), {
      photoURL: "",
      email: email.toLowerCase(),
      gender,
      name,
      posts: [],
      friends: [],
      messages: [
        {
          id: 15,
          email: "davs202012@mail.ru",
          name: "Davit",
          photoURL: Photo,
          chat: [{ id: 9, message: "Welcome To My Application :)" }],
        },
      ],
      likes: 0,
    }).catch(e => alert(e));
  };

  const onRegister = data => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.pass)
      .then(() => addNewUser(data))
      .catch(e => alert(e));
  };
  return (
    <form
      id="register-content"
      autoComplete="off"
      onSubmit={handleSubmit(onRegister)}
    >
      <input
        placeholder="name"
        {...register("name", { required: true, maxLength: 15 })}
      />
      <input placeholder="email" {...register("email", { required: true })} />
      <div id="gender-form">
        <label>
          male
          <input
            {...register("gender", { required: true })}
            value="male"
            id="male"
            type="radio"
            name="gender"
          />
        </label>
        <label>
          female
          <input
            {...register("gender", { required: true })}
            value="female"
            id="female"
            type="radio"
            name="gender"
          />
        </label>
      </div>
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
