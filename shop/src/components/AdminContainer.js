import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePhoneColor } from "../redux/admin/actionAdmin";

function AdminContainer() {
  const [color, setColor] = useState("");
  const { infos } = useSelector((state) => state.phone);
  const dispatch = useDispatch();

  return (
    <div className="container" style={{margin: "9px auto"}}>
      <h2>Admin Actions</h2>
      <p>
        Color iPhone:
        <span id="count"> {infos.color}</span>
      </p>

      <div className="btnContainer">
        <button onClick={() => dispatch(changePhoneColor(color))}>
          Change color
        </button>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        ></input>
      </div>
    </div>
  );
}

export default AdminContainer;
