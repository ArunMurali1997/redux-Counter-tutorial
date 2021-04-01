import "./App.css";
import React, { useState } from "react";
import { connect } from "react-redux";
import Cout from "../components/Conteer/CounerOutput";
import Cbutton from "../components/CounterControl/Cbutton";
import DisplayResult from "../components/CounterDIsplay/CounterDisplay";
//import _ from "lodash/array";

// import counter from "../components/Conteer/CounerOutput";
// import { connect } from "react-redux";
const App = (props) => {
  const [counterState, setCounterState] = useState({ counter: 0, result: [] });
  console.log(counterState.result[counterState.result.length]);

  // const incHandler = () =>
  //   setCounterState({ ...counterState, counter: counterState.counter + 1 });
  // const str = { ...counterState };
  // console.log({ ...str, counter: str.counter++ });

  //return setCounterState({ ...str, counter: str.counter++ });
  const onSaveHandler = () => {
    const str = { ...counterState };
    //let string = str.result[str.result.length];

    setCounterState({
      ...str,
      result: [...str.result, str.counter],
    });

    //console.log(counterState.result);
  };

  return (
    <div className="App">
      <Cout value={props.ctr} />
      <Cbutton value={"Increment"} click={props.onIncrementCounter} />
      <Cbutton value={"Save"} click={onSaveHandler} />
      <DisplayResult value={counterState.result}></DisplayResult>
    </div>
  );
};
const mapStaeToProps = (state) => {
  return { ctr: state.counter };
};
const mapDispatchToProps = (dispatch) => {
  return { onIncrementCounter: () => dispatch({ type: "INC" }) };
};

export default connect(mapStaeToProps, mapDispatchToProps)(App);
