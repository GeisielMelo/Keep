import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_AXIOS_BASE_URL,
})

// User
export const createUserData = async (email, password) => {
  return api.post('/users/', { email, password })
}

export const updateUserData = async (id, name, lastName, password) => {
  return api.put('/users/', { id, name, lastName, password })
}

export const fetchUserData = async (id) => {
  return api.get(`/users/${id}/`)
}

// Sign
export const signIn = async (email, password) => {
  return api.post('/auth/sign-in', { email, password })
}

export const signOut = async () => {
  return api.delete('/auth/sign-out')
}
