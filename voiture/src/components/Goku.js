import React, { Component } from "react";
import goku from "./goku.png";

class Goku extends Component {
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
    return (
      <div className="col">
        <img style={{ width: "289px" }} src={goku} alt="goku" />
        <hr />
        <button onClick={this.addOne} className="btn btn-success mb-3">
          Frapper
        </button>
        <hr />
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col"> Coups</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.hits}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Goku;
