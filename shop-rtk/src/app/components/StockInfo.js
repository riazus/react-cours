import React from "react";

const span = {
  fontSize: "19px",
};

const alertStyle = {
  background: "crimson",
  color: "white",
  padding: "7px",
  borderRadius: "6px",
};

function StockInfo({ product, stock }) {
  const alert = stock < 2 && alertStyle;

  return (
    <p>
      <span style={{ ...span, ...alert }}>
        {product}: {stock}
      </span>
    </p>
  );
}

export default StockInfo;
