import { useEffect } from "react";
import { useState } from "react";
import { FaSquareMinus, FaSquarePlus } from "react-icons/fa6";

export default function Dom() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count;
  });
  return (
    <>
      <div className="container">
        <button onClick={() => setCount(count + 1)}>
          <FaSquarePlus size={50} />
        </button>
        <h1>{count}</h1>
        <button onClick={() => count !== 0 && setCount(count - 1)}>
          <FaSquareMinus size={50} />
        </button>
      </div>
    </>
  );
}
