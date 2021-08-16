import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { add, sub } from "../../store/modules/count";

const CounterContainer2 = () => {
  const count = useSelector((state) => state.count, []);
  const dispatch = useDispatch();

  // useEffect(console.log(count), []);
  return (
    <Counter
      number={count}
      onAdd={() => dispatch(add())}
      onSub={() => dispatch(sub())}
    />
  );
  // return <div>redux study</div>;
};

export default CounterContainer2;
