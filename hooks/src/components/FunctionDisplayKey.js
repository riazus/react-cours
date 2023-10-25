import React, { useState, useEffect } from "react";

export default function FunctionDisplayKey() {
  const [keyCode, setKeyCode] = useState("");

  const handleKeyUp = (e) => {
    setKeyCode(e.code);
  };

  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keyup", handleKeyUp)
    }
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="text-center">KEY: {keyCode}</h1>
      </div>
    </div>
  );
}
