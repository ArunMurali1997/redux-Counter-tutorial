import Aux from "../../hoc/Auxillary";
import React from "react";
import "./Cbutton.css";
const cButton = (props) => {
  //console.log(props.click);
  return (
    <Aux>
      <button className="Counter" onClick={props.click}>
        {props.value}
      </button>
    </Aux>
  );
};
export default cButton;
