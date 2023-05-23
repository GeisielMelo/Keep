import React, { useState } from "react";
import Contracted from "./Contracted";
import Expanded from "./Expanded";

function Menu() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="div-menu fixed"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {expanded ? <Expanded actualValue={expanded}/> : <Contracted />}
    </div>
  );
}

export default Menu;
