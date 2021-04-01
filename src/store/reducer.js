/* eslint-disable default-case */
const rootReducer = (state = { counter: 0, result: [] }, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, counter: state.counter + 1 };
    case "DEC2":
      return { ...state, counter: state.counter - action.value };
    case "STORE_RESULT":
      return { ...state, result: [...state.result, state.counter] };
  }
  return state;
};
export default rootReducer;
