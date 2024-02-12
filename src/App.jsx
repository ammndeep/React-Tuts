import { useState } from "react";
import Message from "./components/Message";
import Privacy from "./components/Privacy";

export default function App() {
  const [msg, setMsg] = useState(false);

  const msgUser = () => {
    setMsg(true);
  };

  const hideMsg = () => {
    setMsg(false);
  };

  return (
    <>
      <h1>Events & Conditional Rendering in React</h1>
      {msg ? <Message /> : <Privacy />}
      <button onClick={msgUser}>Show</button>
      <button onClick={hideMsg}>Hide</button>
    </>
  );
}
