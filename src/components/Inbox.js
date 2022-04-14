import React, { useState } from "react";

export default function Inbox(props) {
  let userName = props.email.substring(0, props.email.lastIndexOf("@"));
  let domain = props.email.substring(props.email.lastIndexOf("@") + 1);
  let urlForInbox = `https://www.1secmail.com/api/v1/?action=getMessages&login=${userName}&domain=${domain}`;

  let [mails, setMails] = useState([]);

  /**
   * Fetches the inbox from api
   */
  const refreshInbox = () => {
    fetch(urlForInbox)
      .then(response => response.json())
      .then(data => {
        setMails(data);
      });
  };

  /**
   * renders the inbox table
   */
  const renderInbox = (mail) => {
    return (
      <tr key={mail.id}>
        <td>{mail.from}</td>
        <td>{mail.subject}</td>
        <td>{mail.date}</td>
      </tr>
    );
  };

  return (
    <div>
      <table className="table table-striped">
        <tbody>{mails?.map(renderInbox)}</tbody>
      </table>
      <button className="btn btn-primary" onClick={refreshInbox}>Refresh Inbox</button>
    </div>
  );
}
