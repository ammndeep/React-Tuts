// import { useState } from "react";

// export default function Child(props) {
//   const [input, setInput] = useState("");

//   const updateData = (e) => {
//     setInput(e.target.value);
//   };

//   const updateParentData = () => {
//     props.handleChildData(input);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={input}
//         placeholder="Enter Data"
//         onChange={updateData}
//       />
//       <button onClick={updateParentData}>Update Parent</button>
//     </div>
//   );
// }

//? Using Class Components

import { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  updateData = (e) => {
    this.setState({ input: e.target.value });
  };

  updateParentData = () => {
    // eslint-disable-next-line react/prop-types
    this.props.handleChildData(this.state.input);
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.input}
          onChange={this.updateData}
          placeholder="Enter Data"
        />
        <button onClick={this.updateParentData}>Upadte Data</button>
      </div>
    );
  }
}
