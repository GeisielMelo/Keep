import React from "react";
import Head from "./Head.jsx";
import RegisterForm from "./RegisterForm.jsx";
import ChangeScreen from "./ChangeScreen.jsx";

function RegisterBox(props) {
  return (
    <div className="center sign-box">
      <div className="center flex-column">
        <Head />
        <RegisterForm />
        <ChangeScreen />
      </div>
    </div>
  );
}

export default RegisterBox;
