import React from "react";
import GeneralChat from "../../components/generalChat/GeneralChat";
import MessageForm from "../../components/generalChat/MessageForm";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div id="home-page">
      <div className="content content-home">
        <GeneralChat />
        <MessageForm />
      </div>
    </div>
  );
};

export default HomePage;
