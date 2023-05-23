import React from "react";
import Menu from "./menu/Menu.jsx";
import Content from "./mainwindow/Content.jsx";

function Body() {
  return (
    <div className="container">
      <Menu />
      <Content />
    </div>
  );
}

export default Body;
