import { useState, useEffect } from "react";

export default function CleanUp() {
  const [widthCount, setWidthCount] = useState(window.screen.width);

  const handleWidthScreen = () => {
    setWidthCount(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWidthScreen);

    return () => {
      window.removeEventListener("resize", handleWidthScreen);
    };
  });

  return (
    <div>
      <h1>The Width of The Window :- {widthCount}</h1>
    </div>
  );
}
