import React, { useEffect } from "react";
import { generateRandomEmail } from "../services/EmailService";

export default function Email(props) {
  const generateEmail = () => {
    generateRandomEmail()
      .then((email) => {
        props.setEmail(email);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(props.email);
  };

  useEffect(() => {
    generateEmail();
  }, []);

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
