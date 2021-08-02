import React from "react";
import "./Counter.css";

const Counter = ({ value, color, onIncrement, onDecrement }) => {
  return (
    <div className="Counter">
      <h1 style={{ color }}>{value}</h1>
      <button onClick={onIncrement}>ADD(+)</button>
      <button onClick={onDecrement}>SUB(-)</button>
    </div>
  );
};

export default Counter;
