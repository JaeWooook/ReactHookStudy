const ADD = "count/ADD";
const SUB = "count/SUB";

export const add = () => ({ type: ADD });
export const sub = () => ({ type: SUB });

const initialState = 0;

const count = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    case SUB:
      return state - 1;
    default:
      return state;
  }
};

export default count;
