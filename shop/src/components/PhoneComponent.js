import React from "react";
import phone from "../images/phone.png";

export default function PhoneComponent() {
  return (
    <div className="container">
      <img src={phone} alt="phone"></img>
      <p>
        Disponibilite:
        <span id="count"></span>
      </p>
      <button>Acheter</button>
    </div>
  );
}
