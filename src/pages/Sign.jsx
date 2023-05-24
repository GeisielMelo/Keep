import React, { useState } from "react";
import LoginBox from "../components/sign/LoginBox.jsx"
import RegisterBox from "../components/sign/RegisterBox.jsx"

function Sign() {
  const [SignBoolean, setSignBoolean] = useState(true);

  return <div>{SignBoolean ? <LoginBox/> : <RegisterBox/>}</div>;
}

export default Sign;
