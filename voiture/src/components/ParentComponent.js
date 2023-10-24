import { Component } from "react";
import SimpleComponent from "./SimpleComponent";
import PureComp from "./PureComponent";
import PureFunc from "./PureFunc";
import PureButton from "./PureButton";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Superman",
    };
  }

  changeHero = () => {
    this.setState({
      name: "Batman",
    });
  };

  render() {
    console.log("%c Parent Component render()", "color: red;");
    return (
      <>
        <h3>Parent Component: {this.state.name}</h3>
        <SimpleComponent name={this.state.name} />
        <PureComp name={this.state.name} />
        <PureFunc name={this.state.name}></PureFunc>
        <PureButton onButtonClick={this.changeHero}>Change Hero</PureButton>
      </>
    );
  }
}

export default ParentComponent;
