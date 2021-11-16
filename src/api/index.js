import axios from 'axios';
import jwt_decode from 'jwt-decode';

import { localStorage, log, setTokens } from '_utils';
import { URL } from '_config';

const API = axios.create({
  baseURL: URL,
  timeout: 3000,
  responseType: 'json',
  headers: { 'Content-Type': 'application/json' },
});

//This function is used to get the new access token and refresh token and set it in localStorage.
const refreshToken = async () => {
  try {
    const resToken = await localStorage.getItem('refreshToken');
    const { data } = await axios.post(URL + '/user/refresh_token', {
      token: resToken,
    });
    //set the refresh token and access token in the localStorage
    await setTokens(data.refreshToken, data.accessToken);
    return data;
  } catch (error) {
    log(error);
    return null;
  }
};

// Added for request interceptor
API.interceptors.request.use(
  async (config) => {
    const token = await localStorage.getItem('token');
    if (token) {
      const currentDate = new Date();
      const decodeToken = jwt_decode(token);
      //Check for token expiring or not
      if (decodeToken.exp * 1000 < currentDate.getTime()) {
        // If token expire then get the new access token
        let res = await refreshToken();
        config.headers.Authorization = 'Bearer ' + res.accessToken;
      } else {
        // If token not expire then set the token
        config.headers['Authorization'] = 'Bearer ' + token;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
