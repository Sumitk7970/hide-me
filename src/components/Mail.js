import React, { useEffect, useState } from "react";
import { fetchASingleMessage } from "../services/EmailService";

export default function Mail(props) {
  let [message, setMessage] = useState({});

  const fetchMessage = () => {
    fetchASingleMessage(props.email, props.activeTab)
      .then((message) => {
        setMessage(message);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    console.info("Another second has slipped into the past.");
    fetchMessage();
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          props.setActiveTab(-1);
        }}
      >
        Back
      </button>
      {message === {} && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
      {message !== {} && (
        <div>
          <h5>{message.subject}</h5>
          <h6>{message.from}</h6>
          <div dangerouslySetInnerHTML={{ __html: message.body }} />
        </div>
      )}
    </div>
  );
}
