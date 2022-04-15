import React, { useEffect, useState } from "react";
import { fetchInbox } from "../services/EmailService";

export default function Inbox(props) {
  let [messages, setMessages] = useState();

  const fetchMessages = () => {
    fetchInbox(props.email)
      .then((messages) => {
        setMessages(messages);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  /** renders the inbox table */
  const renderInbox = (message) => {
    return (
      <tr key={message.id} onClick={() => props.setActiveTab(message.id)}>
        <td>{message.from.substring(0, message.from.lastIndexOf("@"))}</td>
        <td>{message.subject}</td>
        <td>{message.date}</td>
      </tr>
    );
  };

  return (
    <div>
      <h3>Inbox</h3>
      <table className="table table-striped">
        <tbody>{messages?.map(renderInbox)}</tbody>
      </table>
      <button className="btn btn-primary" onClick={fetchMessages}>
        Refresh Inbox
      </button>
    </div>
  );
}
