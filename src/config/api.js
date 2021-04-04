import axios from 'axios';

const API = axios.create({
  baseURL: 'https://e9c531476e7a.ngrok.io/',
  timeout: 20000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

// Add a request interceptor
API.interceptors.request.use(
  (config) =>
    // Do something before request is sent
    config,
  (error) =>
    // Do something with request error
    Promise.reject(error)
);

// Add a response interceptor
API.interceptors.response.use(
  (response) =>
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    response,
  (error) =>
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    Promise.reject(error)
);

export default API;
