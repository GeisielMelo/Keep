import React, { useState, useContext } from "react";
import { createUser } from "../../services/api.js";
import { createSession } from "../../services/api";
import { AuthContext } from "../../context/auth";

import ChangeScreen from "./components/ChangeScreen";
import Logo from "./components/Logo";
import SignTitle from "./components/SignTitle";
import Input from "./components/Input";
import Button from "./components/Button";

function LoginPage() {
  const [page, setPage] = useState("singIn");
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [singUpError, setSingUpError] = useState(false);
  const [singInError, setSingInError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const passwordMatch = () => password === password2;
  const passwordLength = () => password.length >= 6;

  const showErroMessage = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setSingInError(false);
      setSingUpError(false);
      setErrorMessage("");
    }, 4000);
  };

  const handleSignIn = async () => {
    if (email === "" || password === "") {
      setSingInError(true);
      return showErroMessage("Fill all fields.");
    }

    try {
      setPage("loading");
      await login(email, password);
      await createSession(email, password);
    } catch (error) {
      console.log(error);
      setPage("singIn");
      setSingInError(true);
      showErroMessage("Internal server error.");
    }
  };

  const handleSingUp = async () => {
    if  (email === "" || password === "" || password2 === "") {
      setSingUpError(true);
      return showErroMessage("Fill all fields.");
    }

    if (!passwordLength()) {
      setSingUpError(true);
      return showErroMessage("Password must have at least 6 characters.");
    }

    if (!passwordMatch()) {
      setSingUpError(true);
      return showErroMessage("Passwords don't match.");
    }

    try {
      setPage("loading");
      await createUser(email, password);
      await login(email, password);
      await createSession(email, password);
    } catch (error) {
      console.log(error);
      setPage("singUp");
      setSingUpError(true);
      showErroMessage("Internal server error.");
    }
  };

  const handleSingInPage = () => {
    setPage("singIn");
    setPassword2("");
  };

  const handleSingUpPage = () => {
    setPage("singUp");
    setPassword2("");
  };

  return (
    <div className="center sign-box-out">
      <div className="center sign-box-in flex-column">
        <Logo />
        {page === "singUp" ? (
          <div>
            <SignTitle title="Sign Up" />
            <Input
              type="email"
              name="email"
              value={email}
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="password"
              name="password2"
              value={password2}
              placeholder="Password"
              onChange={(e) => setPassword2(e.target.value)}
            />
            <Button text="Sign Up" onClick={handleSingUp} />
            <ChangeScreen
              change={handleSingInPage}
              text="Already registered?"
            />
            {singUpError && <p className="error-message">{errorMessage}</p>}
          </div>
        ) : page === "singIn" ? (
          <div>
            <SignTitle title="Sign In" />
            <Input
              type="email"
              name="emailLogin"
              value={email}
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              name="passwordLogin"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button text="Sign In" onClick={handleSignIn} />
            <ChangeScreen change={handleSingUpPage} text="Create Account" />
            {singInError && <p className="error-message">{errorMessage}</p>}
          </div>
        ) : page === "loading" ? (
          <div className="loading-spinner">
            <div className="loading-spinner-animation"></div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default LoginPage;
