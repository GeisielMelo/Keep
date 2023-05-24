import React from "react";

function Button(props) {
  return <button className="sign-btn shadow" onClick={props.action}>{props.text}</button>;
}

export default Button;
