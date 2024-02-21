import { useContext } from "react";
import { AppContext } from "./components/useContext/UserContext";

export default function Child() {
  const userData = useContext(AppContext);

  return (
    <div>
      <h1>
        My Name is {userData.name} and age is {userData.age}
      </h1>
    </div>
  );
}
