import React, { useEffect, useState } from "react";

export default function Mail(props) {
  let userName = props.email.substring(0, props.email.lastIndexOf("@"));
  let domain = props.email.substring(props.email.lastIndexOf("@") + 1);
  let url = `https://www.1secmail.com/api/v1/?action=readMessage&login=${userName}&domain=${domain}&id=${props.activeTab}`;
  let [mail, setMail] = useState({});

  const fetchMail = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMail(data);
        console.log("testing...");
      });
  };

  useEffect(() => {
    const interval = setInterval(function(){
      console.info("Another second has slipped into the past."); 
      fetchMail();
    },1000);
    return () => {
      clearInterval(interval);
    }
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
      {mail === {} && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
      {mail !== {} && (
        <div>
          <h5>{mail.subject}</h5>
          <h6>{mail.from}</h6>
          <div dangerouslySetInnerHTML={{ __html: mail.body }} />
        </div>
      )}
    </div>
  );
}
