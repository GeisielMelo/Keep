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
            <form action="">
              <Input type="email" />
              <Input type="password" /> 
              <Input type="password" />
              <Button text="Sign Up" action={console.log("Sing UP Clicked")} />
            </form>
            <ChangeScreen change={changePage} text="Already registered?"/>
          </>
        ) : (
          <>
            <SignTitle title="Sign In" />
            <form action="">
              <Input type="email" />
              <Input type="password" />
              <Button text="Sign In" action={console.log("Sing IN Clicked")} />
            </form>
            <ChangeScreen change={changePage} text="Create Account"/>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
