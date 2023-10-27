import React from "react";
import phone from "../images/phone.png";
import { connect } from "react-redux";
import { buyPhone } from "../redux/phone/actionPhone";

function PhoneComponent(props) {
  console.log(props);
  return (
    <div className="container">
      <img src={phone} alt="phone"></img>
      <p>
        Disponibilite:
        <span id="count">{props.phones}</span>
      </p>
      <button onClick={() => props.buyPhone()}>Acheter</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    phones: state.phones,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyPhone: () => dispatch(buyPhone()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneComponent);
