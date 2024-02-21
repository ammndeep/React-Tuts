import { useMemo, useState } from "react";
import styled from "styled-components";
export default function Memo() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(5);

  const multiCount = useMemo(() => {
    console.log("Multi Count..");
    return count * 5;
  }, [count]);

  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>Count</Button>
      <h2>Count Value is:- {count}</h2>
      <h2>Item Value is :- {item}</h2>
      <h3> MultiCount Function :- {multiCount}</h3>
      <Button onClick={() => setItem(item * 10)}>Item</Button>
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
