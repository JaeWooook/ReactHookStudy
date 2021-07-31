import React, { useState } from "react";
import Info from "./Info";
import ContextSample from "./ContextSample";
import UserStore from "./store/user";
import Counter from "./Counter";
import Average from "./Average";

function App() {
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
    </UserStore>
  );
}

export default App;
