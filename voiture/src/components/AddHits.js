import { Component } from "react";

class AddHits extends Component {
  constructor(params) {
    super(params);

    this.state = {
      hits: 0,
    };
  }

  addOne = () => {
    this.setState((prevState) => {
      return {
        hits: prevState.hits + 1,
      };
    });
  };

  render() {
    return <>{this.props.render(this.state.hits, this.addOne)}</>;
  }
}

export default AddHits;
