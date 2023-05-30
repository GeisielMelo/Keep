import React, { useState, useContext } from "react";
import { createNote } from "../../../../services/api.js";
import { AuthContext } from "../../../../context/auth.jsx";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const { user } = useContext(AuthContext);
  const [isTextAreaVisible, setTextAreaVisible] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");

  const handleAddNote = async () => {
    const userId = user?.id;
    const title = noteTitle;
    const content = noteContent;
    const status = "active";

    if (noteTitle === "" || noteContent === "") {
      return alert("Please fill in all fields.");
    } else {
      await createNote(userId, title, content, status);
    }
  };

  return (
    <div onFocus={() => setTextAreaVisible(true)}>
      <form className="create-note">
        <input
          name="title"
          onChange={(e) => setNoteTitle(e.target.value)}
          value={noteTitle}
          placeholder="Title"
        />
        {isTextAreaVisible ? (
          <textarea
            name="content"
            onChange={(e) => setNoteContent(e.target.value)}
            value={noteContent}
            placeholder="Take a note..."
            rows="3"
          />
        ) : null}

        <Zoom in={isTextAreaVisible}>
          <Fab onClick={handleAddNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
