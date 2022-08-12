import React, { useState } from "react";
import User from "../menu/img/boy-user.png";
import { CSSTransition } from "react-transition-group";
import "./AnotherMessage.scss";
import ProfileInfo from "./ProfileInfo";

const AnotherMessage = ({ message }) => {
  const [show, setShow] = useState(false);

  const handleShowSettings = () => setShow(!show);

  return (
    <div id="another-message">
      <div className="img" onClick={handleShowSettings}>
        <img src={message.photoURL || User} alt="user"></img>
        <CSSTransition
          in={show}
          classNames="alert"
          timeout={300}
          unmountOnExit
        >
         
          <ProfileInfo user={message} />
        </CSSTransition>
      </div>

      <div className="this-message">
        <h6>{message.displayName}</h6>
        {message.message}
      </div>
    </div>
  );
};

export default AnotherMessage;
