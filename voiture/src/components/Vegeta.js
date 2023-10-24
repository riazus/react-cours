import React, { Component } from "react";
import vegeta from "./vegeta.png";

class Vegeta extends Component {
  render() {
    const {hits, addOne, name} = this.props;

    return (
      <div className="col">
        <img style={{ width: "200px" }} src={vegeta} alt="vegeta" />
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

export default Vegeta;
