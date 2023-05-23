import React from "react";
import NoteButton from "./NoteButton";
import DoneButton from "./DoneButton";
import DeleteButton from "./DeleteButton";
import GitHubButton from "./GitHubButton";

function Menu() {
  return (
    <div className="div-menu fixed">
      <ul className="list-menu">
        <li>
          <NoteButton />
        </li>
        <li>
          <DoneButton />
        </li>
        <li>
          <DeleteButton />
        </li>
        <li>
          <GitHubButton />
        </li>
      </ul>
    </div>
  );
}

export default Menu;
