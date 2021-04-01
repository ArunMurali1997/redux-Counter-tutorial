/* eslint-disable default-case */
const rootReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, counter: state.counter + 1 };
    case "DEC2":
      return { ...state, counter: state.counter - action.value };
  }
  return state;
};
export default rootReducer;
