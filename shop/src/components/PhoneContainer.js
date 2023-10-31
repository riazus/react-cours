import React, { useState } from "react";
import phone from "../images/phone.png";
import { useSelector, useDispatch } from "react-redux";
import { buyPhone } from "../redux/phone/actionPhone";

function PhoneContainer() {
  const [totalPhone, setTotalPhone] = useState(1);
  const { phones, infos } = useSelector((state) => state.phone);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <img src={phone} alt="phone"></img>
      <p>
        Disponibilite: {phones} | Color: {infos.color}
      </p>

      <div className="btnContainer">
        <button onClick={() => dispatch(buyPhone(totalPhone))}>Acheter</button>
        <input
          type="number"
          value={totalPhone}
          onChange={(e) => setTotalPhone(e.target.value)}
        ></input>
      </div>
    </div>
  );
}

export default PhoneContainer;
