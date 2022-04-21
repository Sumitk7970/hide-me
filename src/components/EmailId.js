/*global chrome*/
import React, { useEffect } from "react";

export default function Email(props) {

  /** copies the email id to the clipboard */
  const copyEmail = () => {
    navigator.clipboard.writeText(props.email);
  };

  return (
    <div>
      <h4>{props.email}</h4>
      <button className="btn btn-outline-secondary" onClick={props.generateEmail}>
        Change
      </button>
      <button className="btn btn-outline-primary" onClick={copyEmail}>
        Copy
      </button>
    </div>
  );
}
