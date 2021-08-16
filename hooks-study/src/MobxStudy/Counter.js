import React from "react";
import { makeObservable, observable, action } from "mobx";
import { observer } from "mobx-react";

const Counter = () => {
  let number = 0;
  makeObservable(this, {
    number: observable,
    increase: action,
    decrease: action,
  });
  const increase = () => {
    number++;
  };

  const decrease = () => {
    number--;
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => increase()}>+1</button>
      <button onClick={() => decrease()}>-1</button>
    </div>
  );
};

export default observer(Counter);
