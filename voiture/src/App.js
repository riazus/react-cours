import { Component } from "react";
import Profile from "./components/Profile";
import MyContext from "./components/MyContext";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        name: "Lisa",
        age: 9,
      },
    };
  }

  render() {
    return (
      <div className="container text-center">
        <MyContext.Provider value={this.state.data}>
          <Profile data={this.state.data}/>
        </MyContext.Provider>
      </div>
    );
  }
}

export default App;
