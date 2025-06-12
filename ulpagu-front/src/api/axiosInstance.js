import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://ulpagu-back-s2.onrender.com', 
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;
