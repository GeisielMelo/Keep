import React from "react";
import MenuIcon from '@mui/icons-material/Menu';

function Title() {
  return (
    <div className="container heading-padding">
      <button className="rounded-btn rounded"><MenuIcon /></button>
      <h1 className="heading-title">Reminders</h1>
    </div>
  );
}

export default Title;
