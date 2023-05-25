import React from "react";

function Input(props) {
  return (
      <input
        className="input-box shadow"
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
      />
  );
}

export default Input;
