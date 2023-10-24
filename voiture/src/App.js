import { Component } from "react";
import Vegeta from "./components/Vegeta";
import Goku from "./components/Goku";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container text-center">
        <h1>Goku VS Vegeta</h1>
        <hr />

        <div className="row">
          <Vegeta />
          <Goku />
        </div>
      </div>
    );
  }
}

export default App;
