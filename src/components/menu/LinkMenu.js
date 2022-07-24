import React from "react";
import { NavLink } from "react-router-dom";
import "./LinkMenu.scss";

const LinkMenu = ({ title, path, icon }) => {
  return (
    <NavLink className="links-menu" to={path || `/${title.toLowerCase()}`}>
      <img src={icon} alt={title}></img>
    </NavLink>
  );
};

export default LinkMenu;
