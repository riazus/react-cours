import React, { useRef } from "react";

function Input() {
  const userInputRef = useRef(null);

  const handleClick = () => {
    userInputRef.current.focus();
  };

  return (
    <div className="container">
      <input ref={userInputRef} type="text"></input>
      <button onClick={handleClick}>focus</button>
    </div>
  );
}

export default Input;
