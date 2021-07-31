import React, { useState } from "react";
import Info from "./Info";
import ContextSample from "./ContextSample";
import UserStore from "./store/user";
function App() {
  const [visible, setVisible] = useState(false);
  return (
    //제일 위쪽을 감싸주어야 나머지 하위 컴포넌트에서도 사용가능하다.
    <UserStore>
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
    </UserStore>
  );
}

export default App;
