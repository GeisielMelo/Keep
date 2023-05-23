import React from "react";
import EventNoteIcon from '@mui/icons-material/EventNote';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';

function Contracted() {
  return (
    <ul className="list-menu">
      <li>
        <button className="rounded-btn" title="Notes"><EventNoteIcon/></button>
      </li>
      <li>
        <button className="rounded-btn" title="Done"><DoneIcon/></button>
      </li>
      <li>
        <button className="rounded-btn" title="Trash"><DeleteIcon/></button>
      </li>
    </ul>
  );
}

export default Contracted;
