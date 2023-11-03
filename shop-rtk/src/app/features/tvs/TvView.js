import tv from "../../../images/tv.png";
import { useDispatch, useSelector } from "react-redux";
import { tvs as actionTv } from "./tvSlice";
import { useState } from "react";
import InputNum from "../../components/InputNum";

export default function TvView() {
  const { tvs } = useSelector((state) => state.tv);
  const dispatch = useDispatch();

  const [buyTvCount, setBuyTvCount] = useState(1);

  return (
    <div className="container">
      <img src={tv} alt="tv"></img>
      <p>
        Disponibilite:
        <span className="count">{tvs}</span>
      </p>

      {tvs > 0 && (
        <div className="btnContainer">
          <button
            onClick={() => {
              dispatch(actionTv(buyTvCount));
            }}
          >
            Acheter
          </button>
          <InputNum count={buyTvCount} setCount={setBuyTvCount} />
        </div>
      )}
    </div>
  );
}
