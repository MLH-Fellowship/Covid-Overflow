import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://corona.lmao.ninja/v2/',
  /* other custom settings */
});

export default axiosInstance;
