import React from "react";
import Slide from "@mui/material/Slide";
import EventNoteIcon from '@mui/icons-material/EventNote';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';

function Expanded(props) {
  return (
    <Slide
      direction="right"
      in={props.actualValue}
      timeout={400}
      mountOnEnter
      unmountOnExit
    >
      <ul className="list-menu-expanded">
        <li>
          <button className="rounded-btn-expanded" title="Notes"><EventNoteIcon/>Notes</button>
        </li>
        <li>
          <button className="rounded-btn-expanded" title="Done"><DoneIcon/> Done</button>
        </li>
        <li>
          <button className="rounded-btn-expanded" title="Trash"><DeleteIcon/> Trash</button>
        </li>
      </ul>
    </Slide>
  );
}

export default Expanded;
