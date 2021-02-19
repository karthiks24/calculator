import React from "react";

const KeypadButton = (props) => {
  return (
    <button
      className={`${props?.type ? props.type : ""}`}
      data-identifier={props.identifier}
      onClick={props.clickHandler}>
      {props.children}
    </button>
  );
};

export default KeypadButton;
