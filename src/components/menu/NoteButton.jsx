import React, { useState } from "react";
import EventNoteIcon from "@mui/icons-material/EventNote";
// import DoneIcon from "@mui/icons-material/Done";
// import DeleteIcon from "@mui/icons-material/Delete";

function NoteButton() {
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
      title="Notes"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <EventNoteIcon />
      {expanded && <p>Notes</p>}
    </button>
  );
}

export default NoteButton;
