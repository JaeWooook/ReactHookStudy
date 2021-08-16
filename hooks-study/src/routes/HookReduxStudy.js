import React from "react";
import TodoList from "../HookReduxStudy/components/TodoList";
import CounterContainer2 from "../HookReduxStudy/containers/CounterContainer2";
import TodoListContainer from "../HookReduxStudy/containers/TodoListContainer";

const HookReduxStudy = () => {
  return (
    <div>
      <CounterContainer2 />
      {/* <TodoListContainer /> */}
      <br />
      <hr />
      <br />
      <TodoListContainer />
    </div>
  );
};

export default HookReduxStudy;
