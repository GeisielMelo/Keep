import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth";
import { getNotes } from "../../services/api";

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
  const { user } = useContext(AuthContext);
  const [notes, setNotes] = useState([]);

  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const loadData = async (query = "active") => {
    if (query === "" | query === undefined) {
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


  const handleAdd = () => {
    loadData();
  }
  
  // const handleDelete = async (repository) => {
  //   console.log("delete repo", repository);
  //   await destroyRepository(user?.id, repository._id);
  //   await loadData();
  // };

  if (loadingError) {
    return <div className="loading">{errorMessage}</div>;
  }

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      <div className="heading container fixed">
        <Title />
        <Search onSearch={(query) => loadData(query)} />
        <User onPress={() => loadData("active")} />
      </div>

      <div className="div-menu fixed">
        <ul className="list-menu">
          <li>
            <NoteButton onPress={() => loadData("active")} />
          </li>
          <li>
            <DoneButton onPress={() => loadData("done")} />
          </li>
          <li>
            <DeleteButton onPress={() => loadData("deleted")} />
          </li>
          <li>
            <GitHubButton />
          </li>
        </ul>
      </div>

      <div className="container">
        <div className="div-content">
          <CreateArea onAdd={handleAdd} />
          {notes.map((note) => {
            return (
              <Note
                key={note._id}
                id={note._id}
                title={note.title}
                content={note.content}
                onDelete={console.log()}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
