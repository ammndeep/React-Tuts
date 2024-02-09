import { Component } from "react";
import FetchData from "./components/FetchData";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidUpdate(prevsProps, PrevState) {
    if (prevsProps.count !== this.state.count) {
      console.log("Component Update");
    }
  }

  Increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.Increment()}>Click Me</button>
        <FetchData />
      </div>
    );
  }
}
