import axios from 'axios';
 
const API_URL = 'http://localhost:3042';
 
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
 
export const createUser = async (user) => {
  try {
    const response = await api.post('/api/users', user);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};
 
export const getUserByEmail = async (email) => {
  try {
    const response = await api.get(`/api/users/${email}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};
 
export const loginUser = async (credentials) => {
  try {
    console.log(credentials);
    const response = await api.post('/api/login', credentials);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};
 
export const registerUser = async (user) => {
  try {
    const response = await api.post('/api/register', user);
    return response.data;
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
};