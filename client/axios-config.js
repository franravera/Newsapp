
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api', // Cambia esta URL por la URL de tu backend
  timeout: 10000, // Timeout de 10 segundos
});

export default instance;
