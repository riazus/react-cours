import tv from "../../../images/tv.png";
import { useDispatch, useSelector } from "react-redux";
import { tvs as actionTv } from "./tvSlice";

export default function TvView() {
  const { tvs } = useSelector((state) => state.tv);

  const dispatch = useDispatch();

  return (
    <div className="section-one">
      <img src={tv} alt="tv"></img>
      <p>
        Disponibilite:
        <span className="count">{tvs}</span>
      </p>

      <div className="btnContainer">
        <button
          onClick={() => {
            dispatch(actionTv());
          }}
        >
          Acheter
        </button>
      </div>
    </div>
  );
}
