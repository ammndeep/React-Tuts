// import { useState } from "react";
// import AddTodo from "./components/AddTodo";
// import TodoItemsContext from "./store";
// import WelcomeMsg from "./components/WelcomeMsg";
// import TodoItems from "./components/TodoItems";

import Child from "./Child";

// export default function App() {
//   const [todoItems, setTodoItems] = useState([]);

//   const handleNewItem = (itemName, itemDueDate) => {
//     const newTodoItems = [
//       ...todoItems,
//       { name: itemName, dueDate: itemDueDate },
//     ];
//     setTodoItems(newTodoItems);
//   };

//   const handleDeleteItem = (todoItemName) => {
//     const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
//     setTodoItems(newTodoItems);
//   };

//   return (
//     <TodoItemsContext.Provider
//       value={{
//         todoItems,
//         handleDeleteItem,
//         handleNewItem,
//       }}
//     >
//       <h1>Todo App</h1>
//       <AddTodo />
//       <WelcomeMsg />
//       <TodoItems />
//     </TodoItemsContext.Provider>
//   );
// }

// ? With Function Component

// export default function App() {
//   const [childData, setChildData] = useState("");

//   const handleChildData = (data) => {
//     setChildData(data);
//   };

//   return (
//     <div>
//       <h1>Send Data Child to Parent Component</h1>
//       <Child handleChildData={handleChildData} />
//       <h2>Parent Component:- {childData}</h2>
//     </div>
//   );
// }

// ? With Class Component

import { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childData: "",
    };
  }

  handleChildData = (data) => {
    this.setState({ childData: data });
  };
  render() {
    return (
      <div>
        <h1>Send Data Child to Parent Component</h1>
        <Child handleChildData={this.handleChildData} />
        <h1>Parent Component:- {this.state.childData}</h1>
      </div>
    );
  }
}
