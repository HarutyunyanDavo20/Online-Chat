import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Open from "../../components/menu/img/open.png";
import "./Layout.scss";

const Layout = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header />
      <main style={{ height: open ? "80vh" : "90vh" }}>
        <Outlet />
      </main>
      <button id="open-menu">
        <img
          id={open ? "close" : null}
          onClick={() => setOpen(!open)}
          src={Open}
          alt="Open"
        ></img>
      </button>
      {open ? <Footer /> : null}
    </>
  );
};

export default Layout;
