import React, { useEffect, useState } from "react";

export default function FunctionCount() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Vous avez cliquez ${count} fois`;
  }, [count]);

  const addCount = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  return (
    <div>
      <h1>{count}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={addCount}>Clique</button>
    </div>
  );
}
