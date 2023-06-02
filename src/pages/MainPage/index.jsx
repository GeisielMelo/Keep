import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth";
import {
  getNotes,
  getOneNote,
  createNote,
  destroyNote,
} from "../../services/api";
import Title from "./components/heading/Title.jsx";
import Search from "./components/heading/Search.jsx";
import User from "./components/heading/User.jsx";
import NoteButton from "./components/menu/NoteButton.jsx";
import DeleteButton from "./components/menu/DeleteButton.jsx";
import GitHubButton from "./components/menu/GitHubButton.jsx";
import Note from "./components/main/Note.jsx";
import CreateArea from "./components/main/CreateArea.jsx";
// import DoneButton from "./components/menu/DoneButton.jsx";

function MainPage() {
  const { user } = useContext(AuthContext);
  const [notes, setNotes] = useState([]);
  const [page, setPage] = useState("active");

  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const loadData = async (query = "active") => {
    if (query === "" || query === undefined) {
      query = "active";
    }

    try {
      const response = await getNotes(user?.id);
      const userData = response.data;

      if (query === "active" || query === "done" || query === "deleted") {
        const activeNotes = userData.filter((note) => note.status === query);
        setNotes(activeNotes);
      } else {
        const activeNotes = userData.filter((note) =>
          note.title.toLowerCase().includes(query.toLowerCase())
        );
        setNotes(activeNotes);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoadingError(true);
      setErrorMessage("Error loading notes.");
      setTimeout(() => {
        setLoadingError(false);
        setErrorMessage("");
      }, 2000);
    }
  };

  useEffect(() => {
    (async () => await loadData())();
  }, []);

  ////////////////////////////////////////////////////////////////////////////

  const handleAdd = async () => {
    await loadData();
  };

  const handleDelete = async (noteId) => {
    try {
      const response = await getOneNote(user?.id, noteId);
      if (!response) {
        alert("Note not found");
      }
      const note = response.data;
      await createNote(user?.id, note.title, note.content, "deleted");
      await destroyNote(user?.id, noteId);
      await loadData();
    } catch (error) {
      console.log(error);
    }
  };

  const handlePermanentlyDelete = async (noteId) => {
    try {
      const response = await getOneNote(user?.id, noteId);
      if (!response) {
        alert("Note not found");
      }
      await destroyNote(user?.id, noteId);
      await loadData("deleted");
    } catch (error) {
      console.log(error);
    }
  };

  const handleMainPage = async () => {
    setPage("active");
    await loadData("active");
  };

  // const handleDonePage = async () => {
  //   setPage("done");
  //   await loadData("done");
  // };

  const handleTrashPage = async () => {
    setPage("deleted");
    await loadData("deleted");
  };

  ////////////////////////////////////////////////////////////////////////////

  if (loadingError) {
    console.log(errorMessage)
    return (
      <div className="loading-spinner">
        <div className="loading-spinner-animation"></div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="loading-spinner-animation"></div>
      </div>
    );
  }

  ////////////////////////////////////////////////////////////////////////////

  return (
    <div>
      <div className="heading container fixed">
        <Title />
        <Search onSearch={async (query) => loadData(query)} />
        <User onPress={async () => loadData(page)} />
      </div>

      <div className="div-menu fixed">
        <ul className="list-menu">
          <li>
            <NoteButton onPress={handleMainPage} />
          </li>
          {/* <li>
            <DoneButton onPress={handleDonePage} />
          </li> */}
          <li>
            <DeleteButton onPress={handleTrashPage} />
          </li>
          <li>
            <GitHubButton />
          </li>
        </ul>
      </div>

      <div className="container">
        <div className="div-content">
          {page === "active" ? (
            <>
              <CreateArea onAdd={handleAdd} />
              {notes.map((note) => (
                <Note
                  key={note._id}
                  id={note._id}
                  title={note.title}
                  content={note.content}
                  onDelete={() => handleDelete(note._id)}
                />
              ))}
            </>
          ) : page === "done" ? (
            notes.map((note) => (
              <Note
                key={note._id}
                id={note._id}
                title={note.title}
                content={note.content}
                onDelete={() => handleDelete(note._id)}
              />
            ))
          ) : page === "deleted" ? (
            notes.map((note) => (
              <Note
                key={note._id}
                id={note._id}
                title={note.title}
                content={note.content}
                onDelete={() => handlePermanentlyDelete(note._id)}
              />
            ))
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
