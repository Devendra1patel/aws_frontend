// src/api.js
import axios from 'axios';

// Define the base URL for your backend API
const API_URL = 'http://localhost:4000';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Register User
export const registerUser = (userData) => api.post('/auth/register', userData);

// Login User
export const loginUser = (userData) => api.post('/auth/login', userData);

// Get All Users
export const getAllUsers = () => api.get('/users');

// Update User
export const updateUser = (id, userData) => api.put(`/users/${id}`, userData);

// Logout User
export const logoutUser = () => api.post('/auth/logout', {}, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
