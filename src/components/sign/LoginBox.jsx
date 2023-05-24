import React from "react";
import Head from "./Head.jsx";
import LoginForm from "./LoginForm";
import ChangeScreen from "./ChangeScreen.jsx";

function LoginBox(props) {
  return (
    <div className="center sign-box">
      <div className="center flex-column">
        <Head />
        <LoginForm />
        <ChangeScreen />
      </div>
    </div>
  );
}

export default LoginBox;
