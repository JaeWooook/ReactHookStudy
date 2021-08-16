import { combineReducers } from "redux";
import counter from "./counter";
import waiting from "./waiting";
import count from "./count";
import todos from "./todos";

export default combineReducers({
  counter,
  waiting,
  count,
  todos,
  // 다른 리듀서를 만들게되면 여기에 넣어줌..
});
