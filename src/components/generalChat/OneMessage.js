import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "../loader/Loader";
import AnotherMessage from "./AnotherMessage";
import MyMessage from "./MyMessage";

const OneMessage = ({ message }) => {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  if(loading){
    return <Loader/>
  }

  return (
    <div>
      {user.uid === message.id ? (
        <MyMessage message={message} />
      ) : (
        <AnotherMessage message={message} />
      )}
    </div>
  );
};

export default OneMessage;
