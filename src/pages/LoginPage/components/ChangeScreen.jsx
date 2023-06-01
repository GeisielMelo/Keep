import React from "react";

function ChangeScreen(props) {
  return <span className="changeScreen" onClick={props.change}>{props.text}</span>;
}

export default ChangeScreen;
