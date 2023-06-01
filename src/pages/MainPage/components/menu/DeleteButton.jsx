import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function DeleteButton({onPress}) {
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
      title="Deleted"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onPress}
    >
      <DeleteIcon />
      {expanded && <p>Deleted</p>}
    </button>
  );
}

export default DeleteButton;
