import { getAuth } from "firebase/auth";
import { collection, query, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Loader from "../../components/loader/Loader";
import { db } from "../../firebaseConfig";
import PM from "./PM";
import "./style.scss";

const ChatPage = () => {
  const auth = getAuth();
  const [currentUser, loadingUser] = useAuthState(auth);
  const [user, loadingMessages] = useCollectionData(
    query(collection(db, "users"), where("email", "==", currentUser.email))
  );

  if (loadingUser || loadingMessages) {
    return <Loader />;
  }
  const thisUser = user[0]
  
  return (
    <div id="chat">
      <div id="content-chat">
        {thisUser.messages.map(user => (
          <PM key={user.id} chat={user.chat} photoURL={user.photoURL} name={user.name}/>
        ))}
      </div>
    </div>
  );
};

export default ChatPage;
