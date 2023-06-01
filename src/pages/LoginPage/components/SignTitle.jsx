import React from "react";

function SignTitle(props) {
  return (
    <>
      <h1 className="login-large-text">{props.title}</h1>
      <h2 className="login-small-text">to continue to Reminders</h2>
    </>
  );
}

export default SignTitle;
