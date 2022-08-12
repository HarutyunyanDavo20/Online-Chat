import React from "react";
import GeneralChat from "../../components/generalChat";
import MessageForm from "../../components/generalChat/MessageForm";
import "./style.scss";

const HomePage = () => {
  return (
    <div id="home-page">
      <GeneralChat />
      <MessageForm />
    </div>
  );
};

export default HomePage;
