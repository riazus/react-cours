import { Component } from "react";
import "./App.css";
import Mycars from "./components/Mycars";

class App extends Component {
  state = {
    title: "Mon Catalogue Voiture",
    color: "green",
  };

  render() {
    return (
      <div className="App">
        <Mycars title={this.state.title} color={this.state.color} />
      </div>
    )
  }
}

export default App;
