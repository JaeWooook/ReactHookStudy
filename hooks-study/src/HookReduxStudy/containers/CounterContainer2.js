import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { add, sub } from "../../store/modules/count";

const CounterContainer2 = () => {
  const count = useSelector((state) => console.log(state), []);
  const dispatch = useDispatch();

  return <Counter number={count} onAdd={dispatch(add)} onSub={dispatch(sub)} />;
};

export default CounterContainer2;
