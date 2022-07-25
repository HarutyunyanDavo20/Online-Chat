import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => navigate("/"));
  };

  return <button id="log-out-btn">LogOut</button>;
};

export default LogOut;
