import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../app/currentUserSlice";

import "./styles.scss";

const LogOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      dispatch(removeUser());
      navigate("/");
    });
  };

  return (
    <button id="log-out-btn" onClick={handleSignOut}>
      LogOut
    </button>
  );
};

export default LogOut;
