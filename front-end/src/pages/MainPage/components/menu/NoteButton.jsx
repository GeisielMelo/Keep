import React, { useState } from "react";
import EventNoteIcon from "@mui/icons-material/EventNote";

function NoteButton({ onPress }) {
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
      onClick={onPress}
    >
      <EventNoteIcon />
      {expanded && <p>Notes</p>}
    </button>
  );
}

export default NoteButton;
