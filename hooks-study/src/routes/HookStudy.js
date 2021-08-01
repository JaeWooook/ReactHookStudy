import React, { useState } from "react";
import Info from "../HookStudy/Info";
import ContextSample from "../HookStudy/ContextSample";
import UserStore from "../store/user";
import Counter from "../HookStudy/Counter";
import Average from "../HookStudy/Average";
import UsePromiseSample from "../HookStudy/UsePromiseSample";

const HookStudy = () => {
  const [visible, setVisible] = useState(false);
  return (
    <UserStore>
      <div>
        <Counter></Counter>
      </div>
      <div>
        <button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {visible ? "숨기기" : "보이기"}
        </button>
        <hr></hr>
        {visible && <Info></Info>}
        <ContextSample></ContextSample>
      </div>
      <div>
        <Average></Average>
      </div>
      <div>
        <UsePromiseSample />
      </div>
    </UserStore>
  );
};
export default HookStudy;
