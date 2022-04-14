import { useState } from "react";
import "./App.css";
import EmailText from "./components/EmailText";
import Inbox from "./components/Inbox";

function App() {

  let [email, setEmail] = useState('demo@domain.com');

  return (
    <div className="App">
      <EmailText email={email} setEmail={setEmail}/>
      <Inbox email={email}/>
    </div>

  );
}

export default App;
