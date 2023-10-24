import { Component } from "react";
import Modal from "./components/Modal";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  handleShow = () => {
    this.setState({
      showModal: true,
    });
  };

  handleHide = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    console.log(this.state.showModal);
    return (
      <div className="App">
        <button onClick={this.handleShow}>Afficher le modal</button>
        {this.state.showModal && <Modal onClick={this.handleHide}/>}
      </div>
    );
  }
}

export default App;
