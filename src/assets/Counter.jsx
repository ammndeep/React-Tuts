import { Component } from "react";

export default class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps.count);
    // console.log(this.props.count);

    if (prevProps.count !== this.props.count) {
      console.log("Component Updated");
    }
  }
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
      </div>
    );
  }
}
