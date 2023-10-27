import React from "react";
import { connect } from "react-redux";
import { buyTv } from "../redux/tv/actionTv";

function TvContainer(props) {
  console.log(props);
  return (
    <div className="container">
      <img alt="tv"></img>
      <p>
        Disponibilite:
        <span id="count">{props.tv}</span>
      </p>
      <button>Acheter</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tv: state.television.tv,
  };
};

const mapDispatchToProps = () => {
  return {
    buyTv: () => dispatch(buyTv()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TvContainer);
