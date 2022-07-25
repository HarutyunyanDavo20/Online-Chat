import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "../../components/loader/Loader";
import MyInfo from "./myInfo/MyInfo";
import "./ProfilePage.scss";

const ProfilePage = () => {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="content content-profile">
      <MyInfo name={user?.displayName} photoURL={user?.photoURL} likes={5} />
    </div>
  );
};

export default ProfilePage;
