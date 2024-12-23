import axios, { AxiosResponse } from "axios";
import { Envelope } from "../models/Envelope";

const API_URL: string = "http://localhost/backend/Accounts/";
const API_URL_local: string = "http://localhost:5098/Accounts/";

type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};
export class AccountsService {
  static async login(
    userEmail: string,
    password: string
  ): Promise<AxiosResponse<Envelope<LoginResponse>>> {
    return axios.post<Envelope<LoginResponse>>(API_URL_local + "login", {
      userEmail,
      password,
    });
  }
}
