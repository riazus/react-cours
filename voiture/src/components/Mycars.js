import React, { Component } from "react";
import Cars from "./Cars";
import Wrapper from "./Wrapper";
import Myheader from "./Myheader";

class Mycars extends Component {
  cars = [
    {
      marque: "Ford",
      color: "red",
    },
    {
      marque: "Citroen",
    },
    {
      marque: "Mercedes",
      color: "black",
    },
  ];

  render() {
    return (
      <div>
        <Wrapper>
          <Myheader wordColor={this.props.color}>Mon Catalogue Voitures 2</Myheader>
        </Wrapper>
        {this.cars.map((item) => {
          return (
            <Cars key={item.marque} children={item.marque} color={item.color} />
          );
        })}
      </div>
    );
  }
}

export default Mycars;
