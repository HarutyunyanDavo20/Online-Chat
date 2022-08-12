import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../../components/menu";
import "./style.scss";

const Layout = () => {
  return (
    <div id="container">
      <div id="border-wrapper">
        <div id="content">
          <Outlet />
        </div>
        <div id="menu-wrapper">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Layout;
