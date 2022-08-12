import React from "react";
import UserIcon from "../../../components/menu/img/boy-user.png";
import Like from "./img/like.png";

const MyInfo = ({ name, photoURL, likes }) => {
  return (
    <div id="my-info">
      <div id="name">{name}</div>
      <div id="photo">
        <img src={photoURL || UserIcon} alt="user"></img>
      </div>
      <div id="likes">
        <img src={Like} alt="like"></img> {likes || 0}
      </div>
    </div>
  );
};

export default MyInfo;
