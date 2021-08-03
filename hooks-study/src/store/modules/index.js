import { combineReducers } from "redux";
import counter from "./counter";
import waiting from "./waiting";
import count from "./count";

export default combineReducers({
  counter,
  waiting,
  count,
  // 다른 리듀서를 만들게되면 여기에 넣어줌..
});
