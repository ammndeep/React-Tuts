import { useState } from "react";
import { FaSquarePlus } from "react-icons/fa6";
import { FaSquareMinus } from "react-icons/fa6";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>useState Hook</h1>
      <div className="container">
        <button onClick={() => setCounter(counter + 1)}>
          <FaSquarePlus size={50} />
        </button>
        <h1>{counter}</h1>
        <button onClick={() => counter !== 0 && setCounter(counter - 1)}>
          <FaSquareMinus size={50} />
        </button>
      </div>
    </>
  );
}
