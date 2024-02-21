import { useReducer } from "react";
import { FaSquarePlus } from "react-icons/fa6";
import { FaSquareMinus } from "react-icons/fa6";
import reducer from "./Reducer";

const initialVal = 0;
export default function ReducerHook() {
  const [count, dispatch] = useReducer(reducer, initialVal);

  return (
    <>
      <h1>useReducer Hook</h1>
      <div className="container">
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          <FaSquarePlus size={50} />
        </button>
        <h1>{count}</h1>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          <FaSquareMinus size={50} />
        </button>
      </div>
    </>
  );
}
