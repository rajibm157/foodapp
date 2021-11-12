import axios from 'axios';

import { localStorage } from '_utils';
import { URL } from '_config';

const API = axios.create({
  baseURL: URL,
  timeout: 3000,
  responseType: 'json',
  headers: { 'Content-Type': 'application/json' },
});

// Added for request interceptor
API.interceptors.request.use(
  async (config) => {
    const token = await localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
