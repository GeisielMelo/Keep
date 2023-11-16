import React, { useState, useEffect, createContext } from 'react';
import { createRepository, fetchRepository, updateRepository } from '../services/api';

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [labels, setLabels] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const user = localStorage.getItem('user');
      if (user && !data) {
        const response = await fetchRepository(JSON.parse(user));
        setData(response.data);
        if (!response) {
          await createRepository(JSON.parse(user));
        }
      }
    };

    fetchData();
  }, [data]);

  const syncData = async () => {
    // Lógica para sincronizar dados, se necessário
  };

  const addLabel = (label) => {
    setLabels((prevLabels) => [...prevLabels, label]);
  };

  const removeLabel = (label) => {
    setLabels((prevLabels) => prevLabels.filter((l) => l !== label));
  };

  const contextData = {
    notes,
    labels,
    addLabel,
    removeLabel,
  };

  return <NotesContext.Provider value={contextData}>{children}</NotesContext.Provider>;
};
