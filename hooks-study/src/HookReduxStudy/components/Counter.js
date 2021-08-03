import React from "react";

const Counter = ({ onAdd, onSub, number }) => {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={onAdd}>+1</button>
        <button onClick={onSub}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
