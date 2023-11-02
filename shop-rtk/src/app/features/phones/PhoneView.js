import React from "react";
import phone from "../../../images/phone.png";
import { useDispatch, useSelector } from "react-redux";
import { phones as phonesAction } from "./phoneSlice";

export default function PhoneView() {
  const { phones } = useSelector((state) => state.phone);
  const dispatch = useDispatch();

  return (
    <div className="section-one">
      <img src={phone} alt="phone"></img>
      <p>
        Disponibilite:
        <span className="count">{phones}</span>
      </p>

      <div className="btnContainer">
        <button
          onClick={() => {
            dispatch(phonesAction());
          }}
        >
          Acheter
        </button>
      </div>
    </div>
  );
}
