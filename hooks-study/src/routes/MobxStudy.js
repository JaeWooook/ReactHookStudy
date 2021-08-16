import React from "react";
import indexStore from "../store/modules/indexStore";
import { useObserver } from "mobx-react-lite";

const MobxStudy = () => {
  const { numberStore } = indexStore();

  const onClickIncrease = () => {
    numberStore.increaseAction(1);
  };
  const onClickDecrease = () => {
    numberStore.decreaseAction(1);
  };
  return useObserver(() => (
    <div>
      <p>현재 값: {numberStore.num}</p>
      <button onClick={onClickIncrease}>증가</button>
      <button onClick={onClickDecrease}>감소</button>
    </div>
  ));
};

export default MobxStudy;
