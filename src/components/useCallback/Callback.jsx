import { useState } from "react";
import styled from "styled-components";
import Child from "./Child";
import { useCallback } from "react";
export default function Callback() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  const countFunc = useCallback(() => {
    console.log("useCallback function");
  }, [count2]);

  return (
    <div>
      <Child countFunc={countFunc} count2={count2} />
      <Button onClick={increment}>Count :- {count}</Button>
    </div>
  );
}

const Button = styled.button`
  background-color: transparent;
  color: black;
  padding: 10px 20px;
  border: 2px solid black;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    background-color: black;
    color: white;
    font-size: 20px;
  }
`;
