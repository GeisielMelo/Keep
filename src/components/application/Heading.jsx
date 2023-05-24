import React from "react";
import Title from "./heading/Title.jsx";
import Search from "./heading/Search.jsx"
import User from "./heading/User.jsx";

function Heading() {
  return (
    <div className="heading container fixed">
      <Title />
      <Search />
      <User />
    </div>
  );
}

export default Heading;
