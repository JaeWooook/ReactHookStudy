import { createAction, handleActions } from "redux-actions";
import produce from "immer";

//액션 타입 정의하기
const CHANGE_INPUT = "todos/CHANGE_INPUT"; //인풋값을 변경함
const INSERT = "todos/INSERT"; //새로운 todo를 등록함
const TOGGLE_CHECK = "todos/TOGGLE_CHECK";
const REMOVE = "todos/REMOVE";

let id = 3; //insert가 호출될 때마다 1씩 더해진다.

//액션 생성 함수를 간편하게 createAction 써서 만드는 방법
//type에 대한 작성이없다 편리해보인다.
export const changeInput = createAction(CHANGE_INPUT, (input) => input);
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));
export const toggleCheck = createAction(TOGGLE_CHECK, (id) => id);
export const remove = createAction(REMOVE, (id) => id);
const initialState = {
  input: "",
  todos: [
    {
      id: 1,
      text: "리덕스 기초 배우기",
      done: true,
    },
    {
      id: 2,
      text: "리액트와 리덕스 사용하기",
      done: false,
    },
  ],
};
//리듀서 작성 예전방법
// const todos = (state = initialState, action) => {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return {
//         ...state,
//         input: action.payload,
//       };
//     case INSERT:
//       return {
//         ...state,
//         todos: state.todos.concat({ ...action.payload }),
//       };
//     case TOGGLE_CHECK:
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.payload
//             ? {
//                 ...todo,
//                 done: !todo.done,
//               }
//             : todo
//         ),
//       };
//     case REMOVE:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };
// handleAction으로만 간단하게 처리한 리듀서함수
// const todos = handleActions(
//   {
//     [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input: input }),
//     [INSERT]: (state, { payload: todo }) => ({
//       ...state,
//       todos: state.todos.concat(todo),
//     }),
//     [TOGGLE_CHECK]: (state, { payload: id }) => ({
//       ...state,
//       todos: state.todos.map((todo) =>
//         todo.id === id ? { ...todo, done: !todo.done } : todo
//       ),
//     }),
//     [REMOVE]: (state, { payload: id }) => ({
//       ...state,
//       todos: state.todos.filter((todo) => todo.id !== id),
//     }),
//   },
//   initialState
// );
//immer를 이용해서 불변성까지 입힌다.
const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.input = input;
      }),
    [INSERT]: (state, { payload: todo }) =>
      produce(state, (draft) => {
        draft.todos.push(todo);
      }),
    [TOGGLE_CHECK]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const index = draft.todos.findIndex((todo) => todo.id === id);
        draft.todos.splice(index, 1);
      }),
  },
  initialState
);

export default todos;
