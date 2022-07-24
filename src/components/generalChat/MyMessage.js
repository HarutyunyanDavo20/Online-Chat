import React from "react";
import User from "../menu/img/boy-user.png";
import "./MyMessage.scss";

const MyMessage = ({ message }) => {
  return (
    <div id="my-message">
      <div className="this-message">{message.message}</div>

      <div className="img">
        <img src={message.photoURL || User} alt="user"></img>
      </div>
    </div>
  );
};

export default MyMessage;
