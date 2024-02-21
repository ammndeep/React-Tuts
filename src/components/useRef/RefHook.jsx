import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

export default function RefHook() {
  const [userInput, setUserInput] = useState();
  const count = useRef(0);
  const inputRef = useRef();

  useEffect(() => {
    count.current = count.current + 1;
  });

  const changeBorder = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "orange";
  };

  return (
    <>
      <h1>UseRef Hook</h1>
      <input
        type="text"
        ref={inputRef}
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <h2>Component Re-Render Time : {count.current}</h2>
      <button className="btn" onClick={changeBorder}>
        Change Color
      </button>
    </>
  );
}
