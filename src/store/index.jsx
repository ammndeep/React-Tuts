import { createContext } from "react";

const TodoItemsContext = createContext({
  todoItems: [],
  handleDeleteItem: () => {},
  handleNewItem: () => {},
});

export default TodoItemsContext;
