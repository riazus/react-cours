import React, { useState } from "react";
import phone from "../../../images/phone.png";
import tablet from "../../../images/tablet.png";
import { useDispatch, useSelector } from "react-redux";
import { phones as phonesAction, tablets as tabletsAction } from "./phoneSlice";
import InputNum from "../../components/InputNum";

export default function PhoneView() {
  const { phones, tablets } = useSelector((state) => state.phone);
  const dispatch = useDispatch();

  const [buyTabletCount, setBuyTabletCount] = useState(1);
  const [buyPhoneCount, setBuyPhoneCount] = useState(1);

  return (
    <>
      <div className="container">
        <img src={phone} alt="phone"></img>
        <p>
          Disponibilite:
          <span className="count">{phones}</span>
        </p>

        {phones > 0 && (
          <div className="btnContainer">
            <button
              onClick={() => {
                dispatch(phonesAction(buyPhoneCount));
              }}
            >
              Acheter
            </button>
            <InputNum count={buyPhoneCount} setCount={setBuyPhoneCount} />
          </div>
        )}
      </div>
      <div className="container">
        <img src={tablet} alt="tablet"></img>
        <p>
          Disponibilite:
          <span className="count">{tablets}</span>
        </p>

        {tablets > 0 && (
          <div className="btnContainer">
            <button
              onClick={() => {
                dispatch(tabletsAction(buyTabletCount));
              }}
            >
              Acheter
            </button>
            <InputNum count={buyTabletCount} setCount={setBuyTabletCount} />
          </div>
        )}
      </div>
    </>
  );
}
