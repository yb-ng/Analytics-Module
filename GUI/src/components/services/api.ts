import axios, { AxiosError } from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.BASE_URL + import.meta.env.REACT_APP_BASE_API_PATH,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      //TODO: handle unauthorized requests
    }
    return Promise.reject(error);
  },
);

export default instance;
