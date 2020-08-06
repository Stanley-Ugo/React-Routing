import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  state = {
    name: "Francis",
  };

  // This Component will re-render only if the state changes

  render() {
    return (
      <>
        <h3>{this.state.name}</h3>
        <button onClick={() => this.setState({ name: "Francis" })}>
          click to change name
        </button>
      </>
    );
  }
}

export default PureComp;
