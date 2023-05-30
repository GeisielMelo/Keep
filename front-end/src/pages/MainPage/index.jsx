import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/auth";

import Title from "./components/heading/Title.jsx";
import Search from "./components/heading/Search.jsx";
import User from "./components/heading/User.jsx";
import NoteButton from "./components/menu/NoteButton.jsx";
import DoneButton from "./components/menu/DoneButton.jsx";
import DeleteButton from "./components/menu/DeleteButton.jsx";
import GitHubButton from "./components/menu/GitHubButton.jsx";
import Note from "./components/main/Note.jsx";
import CreateArea from "./components/main/CreateArea.jsx";

function MainPage() {
  const { logout } = useContext(AuthContext);
  const [notes, setNotes] = useState([]);

  const handleLogout = () => {
    logout();
  };

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>

      
      <div className="heading container fixed">
        <Title />
        <Search />
        <User onLogout={handleLogout} />
      </div>


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


      <div className="container">
        <div className="div-content">
          <CreateArea onAdd={addNote} />
          {notes.map((noteItem, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
              />
            );
          })}
        </div>
      </div>


    </div>
  );
}

export default MainPage;
