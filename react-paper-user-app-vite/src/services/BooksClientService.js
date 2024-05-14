import axios from "axios"
import inMemoryJWT from './inMemoryJWT'

const BASE_URL = "http://localhost:4000"

export const $api = axios.create({
    withCredentials: true,
    baseURL: `${BASE_URL}/book`,
  })

  $api.interceptors.request.use((config) => {
      const accessToken = inMemoryJWT.getToken();

        if(accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }

      return config;
  }, (error) => {
      Promise.reject(error);
  })


  export default class BooksClientService {
    static async getAllBook(data) {
      return $api.get('/all');
    }

  }
