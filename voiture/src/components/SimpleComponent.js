import { Component } from "react";

class SimpleComponent extends Component {
  render() {
    console.log('%c Simple Component render()', 'color: blue;');
    return (
      <h3>Sample Component: {this.props.name}</h3>
    )
  }
}

export default SimpleComponent;