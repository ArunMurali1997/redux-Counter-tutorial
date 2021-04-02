import _ from "lodash";

const rootReducer = (state = { counter: 0, result: [] }, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, counter: state.counter + 1 };
    case "DEC2":
      return { ...state, counter: state.counter - action.value };
    case "ADD10":
      return { ...state, counter: state.counter + action.value };
    case "DIV10":
      return { ...state, counter: state.counter / action.value };
    case "STORE_RESULT":
      let res = [...state.result, state.counter];
      return { ...state, result: _.uniq(res) };
    default:
      return state;
  }
};
export default rootReducer;
