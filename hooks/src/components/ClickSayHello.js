import React, { useState, useEffect } from "react";
import useUpdateDocTitle from "../hooks/useUpdateDoc";

function ClickSayHello() {
  const [text, setText] = useState("");

  // Custom hook
  useUpdateDocTitle(text);

  return <button onClick={() => setText("Hello world")}>Cliquez</button>;
}

export default ClickSayHello;
