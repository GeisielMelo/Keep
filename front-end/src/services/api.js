import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/",
});

export const createUser = async (email, password) => {
  return api.post("/users/", { email, password });
};

export const createSession = async (email, password) => {
  return api.post("/sessions/", { email, password });
};

export const createNote = async (userId, title, content, status) => {
  return api.post(`/notes/${userId}/`, { title, content, status });
};

export const getNotes = async (userId) => {
  return api.get(`/notes/${userId}/`);
};

export const getOneNote = async (userId, noteId) => {
  return api.get(`/notes/${userId}/${noteId}/`);
};

export const destroyNote = async (userId, noteId) => {
  const url = `/notes/${userId}/${noteId}/`;

  return api.delete(url);
};
