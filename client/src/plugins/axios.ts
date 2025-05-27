import axios from "axios";

const clientApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  // timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

clientApi.interceptors.request.use(
  (config) => {
    config.data = {
      ...config.data,
      // ...config
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

clientApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // handle error
    return Promise.reject(error);
  }
);

export default clientApi;
