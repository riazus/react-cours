import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyTv } from "../redux/tv/actionTv";
import tv from "../images/tv.png";

export default function TvContainer() {
  const [tvBuying, setTvBuying] = useState(1);
  const tvCount = useSelector((state) => state.television.tv);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <img src={tv} alt="tv"></img>
      <p>
        Disponibilite:
        <span id="count"> {tvCount}</span>
      </p>
      <div>
        <button onClick={() => dispatch(buyTv(tvBuying))}>Acheter</button>
        <input
          type="number"
          onChange={(e) => setTvBuying(e.target.value)}
          value={tvBuying}
        ></input>
      </div>
    </div>
  );
}
