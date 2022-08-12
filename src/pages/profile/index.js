import { useSelector } from "react-redux";
import MyInfo from "./myInfo/MyInfo";
import "./style.scss";

const ProfilePage = () => {
  const { user } = useSelector(state => state.currentUser);

  return (
    <MyInfo name={user?.name} photoURL={user?.photoURL} likes={user?.likes} />
  );
};

export default ProfilePage;
