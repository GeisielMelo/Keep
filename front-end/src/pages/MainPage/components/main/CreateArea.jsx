import React, { useState, useContext, useRef } from "react";
import { createNote } from "../../../../services/api.js";
import { AuthContext } from "../../../../context/auth.jsx";
import AddIcon from "@mui/icons-material/Add";
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea({ onAdd }) {
  const { user } = useContext(AuthContext);
  const [isTextAreaVisible, setTextAreaVisible] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const formRef = useRef(null);

  const handleAddNote = async () => {
    try {
      const userId = user?.id;
      const title = noteTitle;
      const content = noteContent;
      const status = "active";

      if (noteTitle === "" || noteContent === "") {
        return alert("Please fill in all fields.");
      } else {
        await createNote(userId, title, content, status);
      }
      onAdd();
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const resetForm = () => {
    setNoteTitle("");
    setNoteContent("");
    setTextAreaVisible(false);
    formRef.current.reset();
  };

  return (
    <div onFocus={() => setTextAreaVisible(true)}>
      <form ref={formRef} className="create-note">
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

        <Zoom className="create-note" in={isTextAreaVisible}>
          <Fab onClick={handleAddNote}>
            <AddIcon />
          </Fab>
        </Zoom>
        <Zoom className="close-note" in={isTextAreaVisible}>
          <Fab onClick={() => setTextAreaVisible(false)}>
            <UpIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
