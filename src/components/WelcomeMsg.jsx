import { useContext } from "react";
import TodoItemsContext from "../store/index.jsx";

export default function WelcomeMsg() {
  const { todoItems } = useContext(TodoItemsContext);

  return todoItems.length === 0 && <h1>Enjoy Your Day</h1>;
}
