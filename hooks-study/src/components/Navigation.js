import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/HookStudy">HookStudy</Link>
        </li>
        <li>
          <Link to="/ReduxStudy">ReduxStudy</Link>
        </li>
        <li>
          <Link to="/MobxStudy">MobxStudy</Link>
        </li>
      </ul>
      <hr></hr>
    </div>
  );
};

export default Navigation;
