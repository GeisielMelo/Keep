import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";

function DoneButton({ onPress }) {
  const [expanded, setExpanded] = useState(false);
  let timeoutId;

  const handleMouseEnter = () => {
    timeoutId = setTimeout(() => {
      setExpanded(true);
    }, 200);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    setExpanded(false);
  };

  return (
    <button
      className="animated-btn"
      title="Done"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onPress}
    >
      <DoneIcon />
      {expanded && <p>Done</p>}
    </button>
  );
}

export default DoneButton;
