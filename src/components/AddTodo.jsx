import { useContext, useRef } from "react";
import TodoItemsContext from "../store/index.jsx";

export default function AddTodo() {
  const { handleNewItem } = useContext(TodoItemsContext);
  const todoNameRef = useRef(null);
  const dueDateRef = useRef(null);

  const handleAddTodoItem = () => {
    const todoName = todoNameRef.current.value;
    const dueDate = dueDateRef.current.value;

    handleNewItem(todoName, dueDate);

    // Clear input fields
    todoNameRef.current.value = "";
    dueDateRef.current.value = "";
  };

  return (
    <div className="add-todo">
      <input type="text" placeholder="Enter Todo Here..." ref={todoNameRef} />
      <input type="date" ref={dueDateRef} />
      <button onClick={handleAddTodoItem}>Add</button>
    </div>
  );
}
