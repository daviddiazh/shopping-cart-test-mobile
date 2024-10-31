import axios from 'axios';

console.log('process.env.BACKEND_URL', process.env.BACKEND_URL);

export const API = {
  baseUrl: process.env.BACKEND_URL,
};

const api = axios.create({
  baseURL: API.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
