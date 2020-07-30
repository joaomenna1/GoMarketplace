import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.100.11.45:3333',
});

export default api;
