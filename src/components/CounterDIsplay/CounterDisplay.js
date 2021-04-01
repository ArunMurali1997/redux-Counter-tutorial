import React from "react";
import "../CounterDIsplay/CounterDisplay.css";
const displaySave = (props) => {
  return props.value.map((O) => (
    <div className="card">
      <ul>{O}</ul>
    </div>
  ));
};
export default displaySave;
