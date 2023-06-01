import React from "react";

function Button(props) {
  return (
    <button disabled={props.status} onClick={props.onClick} className="sign-btn shadow">
      {props.text}
    </button>
  );
}

export default Button;
