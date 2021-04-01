import rootReducer from "./src/store/reducer";
//reducer

//store
const store = createStore(rootReducer);
//dispatching an action
store.dispatch({ type: "INC", value: 1 });
store.dispatch({ type: "ADD", value: 2 });
console.log(store.getState());
