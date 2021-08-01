import React from "react";
import Counter from "../ReduxStudy/Counter";
import Palette from "../ReduxStudy/Palette";
import WaitingList from "../ReduxStudy/WaitingList";

const ReduxStudy = () => {
  return (
    <div className="reduxstudy">
      <Palette selected="red" />
      <Counter value={0} color="red" />
      <WaitingList />
    </div>
  );
};

export default ReduxStudy;
