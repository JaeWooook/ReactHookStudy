import React from "react";
import Counter from "../MobxStudy/componets/Counter";
import SuperMarket from "../MobxStudy/componets/SuperMarket";
// import DevTools from "mobx-react-devtools";

const MobxStudy = () => {
  return (
    <div>
      <div>
        <Counter />
      </div>
      <hr />
      <SuperMarket />
      {/* {process.env.NODE_ENV === "development" && <DevTools />} */}
    </div>
  );
};

export default MobxStudy;
