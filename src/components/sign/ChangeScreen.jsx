import React from "react";

function ChangeScreen(props) {
  return <a onClick={props.change}>{props.text}</a>;
}

export default ChangeScreen;
