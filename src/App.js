/*global chrome*/
import React, { useEffect, useState } from "react";
import "./App.css";
import EmailId from "./components/EmailId";
import Inbox from "./components/Inbox";
import Mail from "./components/Mail";
import { generateRandomEmail } from "./services/EmailService";

function App() {
  // every mail have an id so inbox is also given an id
  const inboxTab = -1;

  let [email, setEmail] = useState("");
  let [activeTab, setActiveTab] = useState(inboxTab);

  const generateEmail = () => {
    generateRandomEmail()
      .then((email) => {
        setEmail(email);
        // saving the email in chrome storage
        chrome.storage.sync.set({ emailIdKey: email }, () => {
          console.log(`email saved: ${email}`);
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    chrome.storage.sync.get(["emailIdKey"], (result) => {
      if (result.emailIdKey !== "undefined") {
        console.log(`getting email from storage: ${result.emailIdKey}`);
        setEmail(result.emailIdKey);
      } else {
        generateEmail();
      }
    });
  }, []);

  return (
    <div className="App">
      <div className="container mb-3">
        <EmailId email={email} generateEmail={generateEmail} />
        {activeTab === -1 && (
          <Inbox email={email} setActiveTab={setActiveTab} />
        )}
        {activeTab !== -1 && (
          <Mail
            email={email}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}
      </div>
    </div>
  );
}

export default App;
