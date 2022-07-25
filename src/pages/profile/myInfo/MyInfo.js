import React from "react";
import LogOut from "../../../components/LogOut";
import UserIcon from '../../../components/menu/img/boy-user.png'
import Like from './img/like.png'
import "./MyInfo.scss";

const MyInfo = ({ name, photoURL, likes }) => {
  return (
    <div id="my-info">
      <div id="name">{name}</div>
      <div id="photo"><img src={UserIcon} alt='user'></img></div>
      <div id="likes"><img src={Like} alt='like'></img> {likes || 0}</div>
      <div id="logout"><LogOut /></div>
    </div>
  );
};

export default MyInfo;
