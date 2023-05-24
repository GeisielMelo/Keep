import React from "react";

function Button(props) {
  return <button className="sign-btn" onClick={props.action}>{props.text}</button>;
}

export default Button;
