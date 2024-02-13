import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoItemsContext from "./store";
import WelcomeMsg from "./components/WelcomeMsg";
import TodoItems from "./components/TodoItems";

export default function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        handleDeleteItem,
        handleNewItem,
      }}
    >
      <h1>Todo App</h1>
      <AddTodo />
      <WelcomeMsg />
      <TodoItems />
    </TodoItemsContext.Provider>
  );
}
