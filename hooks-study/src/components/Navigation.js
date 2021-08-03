import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <nav className="gnb-menu">
        <a href="/">Home</a>
        <a href="/HookStudy">HookStudy</a>
        <a href="/ReduxStudy">ReduxStudy</a>
        <a href="/MobxStudy">MobxStudy</a>
        <a href="/HookReduxStudy">HookReduxStudy</a>
      </nav>
      <hr></hr>
    </div>
  );
};

export default Navigation;
