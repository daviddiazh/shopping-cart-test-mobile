import axios from 'axios';

export const API = {
  baseUrl: 'http://localhost:9000',
  // baseUrl: 'https://shopping-cart-test-backend.vercel.app',
};

const api = axios.create({
  baseURL: API.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
