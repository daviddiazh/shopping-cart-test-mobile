import axios from 'axios';

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
