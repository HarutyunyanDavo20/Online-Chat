import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileInfo = ({ user }) => {

  const navigate = useNavigate()

  const { id } = user;

  const handleOpenMessages = () => {
    navigate(`/chat/${id}`)
  }
  
  return (
    <div className="profile-info-component">
      <button>Profile</button>
      <button>Add friend</button>
      <button onClick={handleOpenMessages}>Messages</button>
    </div>
  );
};

export default ProfileInfo;
