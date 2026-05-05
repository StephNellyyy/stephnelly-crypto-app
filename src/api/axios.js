import axios from 'axios';

const API = axios.create({
  baseURL: 'https://stephnelly-crypto-backend.onrender.com',
  withCredentials: true,
});

export default API;