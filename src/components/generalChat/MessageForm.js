import { getAuth } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { db } from "../../firebaseConfig";
import Timer from "../../Timer";
import Loader from "../loader/Loader";
import Send from "./img/send.png";
import "./MessageForm.scss";

const MessageForm = () => {
  const imgRef = useRef();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const [open, setOpen] = useState(false);

  const { register, handleSubmit, reset } = useForm({ mode: "onChange" });

  const sendMessage = async (data, e) => {
    reset();
    imgRef.current.className = "sending";
    setTimeout(() => {
      imgRef.current.className = "";
    }, 10000);

    await addDoc(collection(db, "messages"), {
      id: user.uid,
      message: data.message,
      displayName: user.displayName,
      photoURL: user.photoURL,
      createAt: serverTimestamp(),
    }).then(() => {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 9000);
    });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(sendMessage)}
      id="message-form"
    >
      <input
        placeholder="Message..."
        {...register("message", { required: true })}
      />

      {open ? (
        <Timer sec={9} />
      ) : (
        <button style={{ display: open ? "" : "" }} disabled={open}>
          <img ref={imgRef} src={Send} alt="Send"></img>
        </button>
      )}
    </form>
  );
};

export default MessageForm;
