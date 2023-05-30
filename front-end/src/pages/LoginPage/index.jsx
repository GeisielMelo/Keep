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
  const [page, switchPage] = useState(false);
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSignIn = async () => {
    login(email, password);
    await createSession(email, password);
  };

  const handleSingUp = async () => {
    if (password <= 8) {
      return alert("Password must be at least 8 characters.");
    }

    if (password !== password2) {
      return alert("Passwords do not match.");
    } else {
      await createUser(email, password);
    }
  };

  const changePage = () => {
    switchPage((page) => !page);
    setPassword2("");
  };

  return (
    <div className="center sign-box-out">
      <div className="center sign-box-in flex-column">
        <Logo />
        {page ? (
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
            <ChangeScreen change={changePage} text="Already registered?" />
          </div>
        ) : (
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
            <ChangeScreen change={changePage} text="Create Account" />
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
