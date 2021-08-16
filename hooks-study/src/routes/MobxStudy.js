import React from "react";
import Counter from "../MobxStudy/componets/Counter";
import SuperMarket from "../MobxStudy/componets/SuperMarket";

const MobxStudy = () => {
  return (
    <div>
      <div>
        <Counter />
      </div>
      <hr />
      <SuperMarket />
    </div>
  );
};

export default MobxStudy;
