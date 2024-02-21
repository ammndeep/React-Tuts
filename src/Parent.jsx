import { useContext } from "react";
import Child from "./Child";
import { AppContext } from "./components/useContext/UserContext";

export default function Parent() {
  const userData = useContext(AppContext);
  return (
    <div>
      <h2>My Profession is {userData.profession}</h2>
      <Child />
    </div>
  );
}
