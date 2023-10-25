import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reinitialiser":
      return 0;
    default:
      return state;
  }
}

export default function Count() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>{count}</h1>
      <button
        className="btn btn-success m-3"
        onClick={() => dispatch("increment")}
      >
        +
      </button>
      <button
        className="btn btn-danger m-3"
        onClick={() => dispatch("decrement")}
      >
        -
      </button>
      <button
        className="btn btn-primary m-3"
        onClick={() => dispatch("reinitialiser")}
      >
        Reinitialize
      </button>
    </div>
  );
}
