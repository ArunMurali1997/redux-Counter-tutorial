import "./App.css";
import React from "react";
import { connect } from "react-redux";
import Cout from "../components/Conteer/CounerOutput";
import Cbutton from "../components/CounterControl/Cbutton";
import DisplayResult from "../components/CounterDIsplay/CounterDisplay";

// import counter from "../components/Conteer/CounerOutput";
// import { connect } from "react-redux";
const App = (props) => {
  // const [counterState, setCounterState] = useState({ counter: 0, result: [] });
  // console.log(counterState.result[counterState.result.length]);

  // const incHandler = () =>
  //   setCounterState({ ...counterState, counter: counterState.counter + 1 });
  // const str = { ...counterState };
  // console.log({ ...str, counter: str.counter++ });

  //return setCounterState({ ...str, counter: str.counter++ });
  // const onSaveHandler = () => {
  //   const str = { ...counterState };
  //   //let string = str.result[str.result.length];

  //   setCounterState({
  //     ...str,
  //     result: [...str.result, str.counter],
  //   });

  //console.log(counterState.result);
  // };

  return (
    <div className="App">
      <Cout value={props.counter} />
      <Cbutton value={"Increment"} click={props.onIncrementCounter} />
      <Cbutton value={"Decrement by 2"} click={props.onDecrementBy2} />
      <Cbutton value={"Add By 10"} click={props.onAddtBy10} />
      <Cbutton value={"divide By 10"} click={props.onDivideBy10} />
      <Cbutton value={"Save"} click={props.onStoreResult} />
      <DisplayResult value={props.result}></DisplayResult>
    </div>
  );
};

const mapStaeToProps = (state) => {
  const { counter, result } = state;
  return { counter, result };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: "INC" }),
    onDecrementBy2: () => dispatch({ type: "DEC2", value: 2 }),
    onStoreResult: () => dispatch({ type: "STORE_RESULT" }),
    onAddtBy10: () => dispatch({ type: "ADD10", value: 10 }),
    onDivideBy10: () => dispatch({ type: "DIV10", value: 10 }),
  };
};

export default connect(mapStaeToProps, mapDispatchToProps)(App);
