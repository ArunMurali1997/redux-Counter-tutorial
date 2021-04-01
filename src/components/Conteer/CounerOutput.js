import React from "react";
import "./CounterOutput.css";
const counter = (props) => {
  //console.log(props);
  return <div className="CounterOutput">Count := {props.value}</div>;
};
export default counter;
