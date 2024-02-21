import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { useLayoutEffect } from "react";

export default function LayoutEffect() {
  const [num, setNum] = useState(0);

  //!  useEffect run asynchronously and after a render is painted to the screen.

  //   useEffect(() => {
  //     if (num === 0) setNum((num) => num + Math.random() * 100);
  //   }, [num]);

  //?  useLayoutEffect runs synchronously after a render but before the screen is updated.
  useLayoutEffect(() => {
    if (num === 0) setNum((num) => num + Math.random() * 100);
  }, [num]);

  return (
    <div>
      <h1>Random Number is :- {num}</h1>
      <Button onClick={() => setNum(0)}>Check</Button>
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
