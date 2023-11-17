import axios from "axios";
import { userLocalStorage } from "./localService";

const TOKEN_CYBER =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOCIsIkhldEhhblN0cmluZyI6IjA3LzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwOTc2OTYwMDAwMCIsIm5iZiI6MTY4Njc2MjAwMCwiZXhwIjoxNzA5OTE3MjAwfQ.KMixzquIcyG1HcsZ_iekv3cHfqWMebGVfzp349mNosg";

export const BASE_URL = "https://airbnbnew.cybersoft.edu.vn/api";
export const GROUPID = "GP12";

// axios instance
export const https = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    TokenCybersoft: TOKEN_CYBER,
    token: userLocalStorage.get()?.token,
  },
  // token
});

// Add a request interceptor
https.interceptors.request.use(
  function (config) {
    // Add Authorization header if access token exists in local storage
    const token = userLocalStorage.get()?.token;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
https.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // store.dispatch(setLoadingOFF());

    if (error.response && error.response.status === 401) {
      window.location.href("/login");
    }

    // Any status codes that fall outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
