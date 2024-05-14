import axios from "axios"

const BASE_URL = "http://localhost:4000"

export const $api = axios.create({
    withCredentials: true,
    baseURL: BASE_URL,
  })

export default class AuthService {
    static async login(data) {
      return $api.post('auth/signin', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }});
    }

    static async register(data) {
        return $api.post('auth/signup', JSON.stringify(data), {
          headers: {
            'Content-Type': 'application/json'
          }});
    }

    static async logout() {
      return $api.post('auth/logout');
    }

    static async refresh() {
      return $api.post('auth/refresh');
    }
  }
  