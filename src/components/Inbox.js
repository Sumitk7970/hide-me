import React, { useEffect, useState } from "react";
import { fetchInbox } from "../services/EmailService";

export default function Inbox(props) {
  let [messages, setMessages] = useState([]);

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
  const renderInbox = (mail) => {
    return (
      <tr key={mail.id} onClick={() => props.setActiveTab(mail.id)}>
        <td>{mail.from.substring(0, mail.from.lastIndexOf("@"))}</td>
        <td>{mail.subject}</td>
        <td>{mail.date}</td>
      </tr>
    );
  };

  /** calls the @function fetchMessages every second */
  useEffect(() => {
    const interval = setInterval(function () {
      fetchMessages();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <table className="table table-striped">
        <tbody>{messages?.map(renderInbox)}</tbody>
      </table>
      <button className="btn btn-primary" onClick={fetchMessages}>
        Refresh Inbox
      </button>
    </div>
  );
}
