import { collection, limit } from "firebase/firestore";
import React, { useEffect, useRef } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../firebaseConfig";
import OneMessage from "./OneMessage";
import { query, orderBy } from "firebase/firestore";
import Loader from "../loader/Loader";
import "./style.scss";

const GeneralChat = () => {
  const [messages, loading] = useCollectionData(
    query(collection(db, "messages"), orderBy("createAt", "desc"), limit(30))
  );

  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = "10000";
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div id="general-chat">
        <div className="messages vertical-scroll" ref={scrollRef}>
          {messages.reverse()?.map(message => (
            <OneMessage message={message} key={message.createAt} />
          ))}
        </div>
      </div>
    </>
  );
};

export default GeneralChat;
