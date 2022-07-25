import React from "react";
import User from "../menu/img/boy-user.png";
import "./AnotherMessage.scss";

const AnotherMessage = ({ message }) => {
  return (
    <div id="another-message">
      <div className="img">
        <img src={message.photoURL || User} alt="user"></img>
      </div>

      <div className="this-message">
        <h6>{message.displayName}</h6>
        {message.message}
      </div>
    </div>
  );
};

export default AnotherMessage;
