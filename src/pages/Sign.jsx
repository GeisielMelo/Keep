import React, { useState } from "react";
import ChangeScreen from "../components/sign/ChangeScreen";
import Logo from "../components/sign/Logo";
import SignTitle from "../components/sign/SignTitle";
import Input from "../components/sign/Input";
import Button from "../components/sign/Button";

function Sign() {
  const [page, setPage] = useState(false);

  function changePage() {
    if (page) {
      setPage(false);
    } else {
      setPage(true);
    }
  }

  return (
    <div className="center sign-box">
      <div className="center flex-column">
        <Logo />
        {page ? (
          <>
            <SignTitle title="Sign Up" />
            <form action="">
              <Input type="email" />
              <Input type="password" />
              <Input type="password" />
              <ChangeScreen change={changePage} text="Already registered?"/>
              <Button text="Sign Up" action={console.log("Sing UP Clicked")} />

            </form>
          </>
        ) : (
          <>
            <SignTitle title="Sign In" />
            <form action="">
              <Input type="email" />
              <Input type="password" />
              <ChangeScreen change={changePage} text="Create Account"/>
              <Button text="Sign In" action={console.log("Sing IN Clicked")} />
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Sign;
