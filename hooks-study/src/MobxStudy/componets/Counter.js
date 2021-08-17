import React from "react";
import indexStore from "../../store/modules/indexStore";
import { useObserver } from "mobx-react-lite";

const Counter = () => {
  const { numberStore } = indexStore();

  const onClickIncrease = () => {
    numberStore.increaseAction(1);
  };
  const onClickDecrease = () => {
    numberStore.decreaseAction(1);
  };
  return useObserver(() => (
    <div>
      <h1>
        <p className="counter-main" style={{ textAlign: "center" }}>
          장바구니에 담을 갯수: {numberStore.num}
        </p>
      </h1>
      <div className="btn" style={{ textAlign: "center" }}>
        <button onClick={onClickIncrease}>증가</button>
        <button onClick={onClickDecrease}>감소</button>
      </div>
    </div>
  ));
};

export default Counter;
