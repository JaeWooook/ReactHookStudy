import { Map } from "immutable";

// 액션 타입 정의
const CHANGE_COLOR = "counter/CHANGE_COLOR";
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

// 액션 생섬함수 정의
export const changeColor = (color) => ({ type: CHANGE_COLOR, color });
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// **** 초기상태 정의
const initialState = Map({
  //객체는 Map이다.
  color: "red",
  number: 0,
});

// **** 리듀서 작성
export default function counter(state = initialState, action) {
  switch (action.type) {
    case CHANGE_COLOR: //set으로 특정 필드의 값을 설정한다.
      return state.set("color", action.color);

    case INCREMENT: //update는 현재 값을 읽어온 다음에 함수에서 정의한 업데이트 로직에 따라 값 변경
      return state.update("number", (number) => number + 1);
    case DECREMENT:
      return state.update("number", (number) => number - 1);
    default:
      return state;
  }
}
