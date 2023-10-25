import React, { useState } from "react";
import FunctionDisplayKey from "./FunctionDisplayKey";

export default function Container() {
  const [show, setShow] = useState(true);

  return (
    <div className="text-center">
      <button className="btn btn-primery m-3" onClick={() => setShow(!show)}>
        {show ? "Cacher" : "Afficher"}
      </button>
      {show && <FunctionDisplayKey />}
    </div>
  );
}
