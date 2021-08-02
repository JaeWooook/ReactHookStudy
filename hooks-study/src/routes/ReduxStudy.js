import React from "react";
import CounterContainer from "../ReduxStudy/containers/CounterContainer";
import PaletteContainer from "../ReduxStudy/containers/PaletteContainer";
import WaitingListContainer from "../ReduxStudy/containers/WaitingListContainer";

const ReduxStudy = () => {
  return (
    <div className="reduxstudy">
      <PaletteContainer />
      <CounterContainer />
      <WaitingListContainer />
    </div>
  );
};

export default ReduxStudy;
