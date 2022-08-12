import React, { useRef } from "react";

const PM = ({ chat, photoURL, name }) => {
  const onDell = () => {};

  const chatRef = useRef();

  const handleOpenMessages = e => {
    document
      .querySelectorAll(".one-chat")
      .forEach(slide => slide.classList.remove("activeChat"));
    chatRef.current.classList.add("activeChat");
  };

  return (
    <div className="one-chat" onClick={handleOpenMessages} ref={chatRef}>
      <div id="one-chat-img">
        <img src={photoURL} alt={name}></img>
      </div>
      <div>
        <div id="name">{name}</div>
      </div>
      {chat.map(msg => (
        <div key={msg.id} id="message-content">
          {msg.message}
        </div>
      ))}
      <button id="delete" onClick={onDell}>
        X
      </button>
    </div>
  );
};

export default PM;
