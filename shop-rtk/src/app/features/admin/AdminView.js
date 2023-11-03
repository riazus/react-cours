import { useSelector } from "react-redux/es/hooks/useSelector";
import StockInfo from "../../components/StockInfo";
import { useState } from "react";
import InputNum from "../../components/InputNum";
import { useDispatch } from "react-redux";
import { addPhones, addTablets } from "../phones/phoneSlice";
import { addTvs } from "../tvs/tvSlice";

const container = {
  width: "300px",
  padding: "20px",
  border: "1px solid grey",
  margin: "10px auto",
};

const btnContainer = {
  display: "flex",
  marginBottom: "12px",
};

const AdminView = () => {
  const { phones, tablets } = useSelector((state) => state.phone);
  const { tvs } = useSelector((state) => state.tv);
  const dispatch = useDispatch();

  const [phoneCount, setPhoneCount] = useState(1);
  const [tabletCount, setTabletCount] = useState(1);
  const [tvCount, setTvCount] = useState(1);

  return (
    <div style={container}>
      <h2>Admin</h2>

      <StockInfo product="Telephones" stock={phones} />
      <div style={btnContainer}>
        <InputNum count={phoneCount} setCount={setPhoneCount} />
        <button onClick={() => dispatch(addPhones(phoneCount))}>
          Augmenter Stock
        </button>
      </div>

      <StockInfo product="Tablets" stock={tablets} />
      <div style={btnContainer}>
        <InputNum count={tabletCount} setCount={setTabletCount} />
        <button onClick={() => dispatch(addTablets(tabletCount))}>
          Augmenter Stock
        </button>
      </div>

      <StockInfo product="Tvs" stock={tvs} />
      <div style={btnContainer}>
        <InputNum count={tvCount} setCount={setTvCount} />
        <button onClick={() => dispatch(addTvs(tvCount))}>Augmenter Stock</button>
      </div>
    </div>
  );
};

export default AdminView;
