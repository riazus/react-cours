import React, { useState } from "react";

export default function FunctionState() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>Function State: {counter}</p>
      <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>State dans Function</button>
    </div>
  );
}
