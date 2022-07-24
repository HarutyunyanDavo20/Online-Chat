import { collection, limit } from "firebase/firestore";
import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../firebaseConfig";
import "./GeneralChat.scss";
import OneMessage from "./OneMessage";
import { query, orderBy } from "firebase/firestore";
import Loader from "../loader/Loader";

const GeneralChat = () => {
  const [messages, loading] = useCollectionData(
    query(collection(db, "messages"), orderBy("createAt", "desc"), limit(30))
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div id="general-chat">
        <div className="messages">
          {messages?.map(message => (
            <OneMessage message={message} key={message.createAt} />
          ))}
        </div>
      </div>
    </>
  );
};

export default GeneralChat;
