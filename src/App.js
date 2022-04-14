import React, { useState } from "react";
import "./App.css";
import EmailId from "./components/EmailId";
import Inbox from "./components/Inbox";
import Mail from "./components/Mail";

function App() {
  // every mail have an id so inbox is also given an id
  const inboxTab = -1;

  let [email, setEmail] = useState('demo@domain.com');
  let [activeTab, setActiveTab] = useState(inboxTab);

  return (
    <div className="App">
      <EmailId email={email} setEmail={setEmail}/>
      {activeTab === -1 && <Inbox email={email} setActiveTab={setActiveTab}/>}
      {activeTab !== -1 && <Mail email={email} activeTab={activeTab} setActiveTab={setActiveTab}/>}
    </div>
  );
}

export default App;
