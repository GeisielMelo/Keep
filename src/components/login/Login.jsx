import React, { useState } from "react";
import ChangeScreen from "./assets/ChangeScreen";
import Logo from "./assets/Logo";
import SignTitle from "./assets/SignTitle";
import Input from "./assets/Input";
import Button from "./assets/Button";

function Login() {
  const [page, setPage] = useState(false);

  function changePage() {
    if (page) {
      setPage(false);
    } else {
      setPage(true);
    }
  }

  return (
    <div className="center sign-box-out">
      <div className="center sign-box-in flex-column">
        <Logo />
        {page ? (
          <>
            <SignTitle title="Sign Up" />
            <form action="/signup" method="POST">
              <Input type="email" name="email"  placeholder="E-mail" />
              <Input type="password" name="password" placeholder="Password" /> 
              <Input type="password" name="passwordConfirm" placeholder="Password" />
              <Button text="Sign Up" />
            </form>
            <ChangeScreen change={changePage} text="Already registered?"/>
          </>
        ) : (
          <>
            <SignTitle title="Sign In" />
            <form action="/signin" method="POST">
              <Input type="email" name="email" placeholder="E-mail"/>
              <Input type="password" name="password" placeholder="Password" />
              <Button text="Sign In" />
            </form>
            <ChangeScreen change={changePage} text="Create Account"/>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
