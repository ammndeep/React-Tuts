import { memo } from "react";

// eslint-disable-next-line react/prop-types, no-unused-vars
function Child() {
  console.log("Child Component");
  return (
    <div>
      <h1>Child Component</h1>
    </div>
  );
}
export default memo(Child);
