import { Component } from "react";
import Vegeta from "./components/Vegeta";
import Goku from "./components/Goku";
import AddHits from "./components/AddHits";

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
          <AddHits
            render={(hits, addOne, name) => (
              <Vegeta hits={hits} addOne={addOne} name="Vegeta" />
            )}
          />

          <AddHits
            render={(hits, addOne, name) => (
              <Goku hits={hits} addOne={addOne} name="Goku" />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
