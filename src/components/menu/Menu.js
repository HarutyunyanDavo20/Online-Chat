import React from "react";
import LinkMenu from "./LinkMenu";
import "./Menu.scss";
import home from "./img/home.png";
import boy from "./img/boy-user.png";
import messenger from "./img/messenger.png";
import settings from "./img/settings.png";

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
