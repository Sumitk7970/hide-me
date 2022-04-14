import React from "react";

export default function EmailText(props) {
  const urlForFakeEmail =
    "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1";

  const generateEmail = () => {
    fetch(urlForFakeEmail)
      .then((response) => response.json())
      .then((data) => {
        props.setEmail(data[0]);
      });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(props.email);
  };

  return (
    <div>
      <h3>{props.email}</h3>
      <button className="btn btn-outline-secondary" onClick={generateEmail}>
        Generate new email
      </button>
      <button className="btn btn-outline-primary" onClick={copyEmail}>
        Copy
      </button>
    </div>
  );
}
