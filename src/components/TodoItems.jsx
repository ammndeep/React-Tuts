import { useContext } from "react";
import TodoItemsContext from "../store/index.jsx";
import TodoItem from "./TodoItem";

export default function TodoItems() {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
        ></TodoItem>
      ))}
    </div>
  );
}
