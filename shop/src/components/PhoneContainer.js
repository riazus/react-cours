import React from "react";
import phone from "../images/phone.png";
import { useSelector, useDispatch } from "react-redux";
import { buyPhone } from "../redux/phone/actionPhone";

function PhoneContainer() {
  const phones = useSelector((state) => state.phones);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <img src={phone} alt="phone"></img>
      <p>
        Disponibilite:
        <span id="count">{phones}</span>
      </p>
      <button onClick={() => dispatch(buyPhone())}>Acheter</button>
    </div>
  );
}

export default PhoneContainer;
