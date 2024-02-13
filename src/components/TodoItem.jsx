import { useContext } from "react";
import TodoItemsContext from "../store/index.jsx";

export default function TodoItem({ todoName, todoDate }) {
  const { handleDeleteItem } = useContext(TodoItemsContext);

  return (
    <div>
      <div className="list-item">
        <h2>{todoName}</h2>
        <h2>{todoDate}</h2>
        <button onClick={() => handleDeleteItem(todoName)}>Delete</button>
      </div>
    </div>
  );
}
