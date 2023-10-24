import { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log('%c Pure Component render()', 'color: green;');
    return <h3>Pure Component: {this.props.name}</h3>;
  }
}

export default PureComp;