import React, { Component } from "react";
import goku from "./goku.png";

class Goku extends Component {
  render() {
    const {hits, addOne, name} = this.props;

    return (
      <div className="col">
        <img style={{ width: "289px" }} src={goku} alt="goku" />
        <hr />
        <button onClick={addOne} className="btn btn-success mb-3">
          {name} Frappe
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
              <td>{hits}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Goku;
