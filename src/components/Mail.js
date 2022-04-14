import React from "react";

export default function Mail(props) {
  let userName = props.email.substring(0, props.email.lastIndexOf("@"));
  let domain = props.email.substring(props.email.lastIndexOf("@") + 1);
  let url = `https://www.1secmail.com/api/v1/?action=readMessage&login=${userName}&domain=${domain}&id=${props.activeTab}`;
  let mail;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
      mail = data;
    });

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{mail.subject}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{mail.from}</h6>
        <p className="card-text">
          <div dangerouslySetInnerHTML={{__html: mail.body}}/>
        </p>
      </div>
    </div>
  );
}
