import React from "react";

function Button(props) {
  return (
    <button type="submit" className="sign-btn shadow">
      {props.text}
    </button>
  );
}

export default Button;
