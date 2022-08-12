import React from "react";
import LinkMenu from "./LinkMenu";
import home from "./img/home.png";
import boy from "./img/boy-user.png";
import messenger from "./img/messenger.png";
import settings from "./img/settings.png";
import "./style.scss";

const Menu = () => {
  return (
    <div id="menu">
      <LinkMenu title="Home" path="/" icon={home} />
      <LinkMenu title="Profile" icon={boy} />
      <LinkMenu title="Chat" icon={messenger} />
      <LinkMenu title="Settings" icon={settings} />
    </div>
  );
};

export default Menu;
