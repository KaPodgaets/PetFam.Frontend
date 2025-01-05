import axios, { AxiosResponse } from "axios";
import { Envelope } from "../types/Envelope";
import { axiosInstance } from "./axiosInstance";
import { LoginResponse } from "../../modules/auth/types/LoginResponse";

const API_URL: string = "http://localhost/backend/Accounts/";
const API_URL_local: string = "http://localhost:5098/";

export class AccountsService {
  static async login(
    userEmail: string,
    password: string
  ): Promise<AxiosResponse<Envelope<LoginResponse>>> {
    return axiosInstance.post<Envelope<LoginResponse>>(
      "Accounts/login",
      {
        userEmail,
        password,
      },
      { withCredentials: true }
    );
  }

  static async refresh(): Promise<AxiosResponse<Envelope<LoginResponse>>> {
    return axios.post<Envelope<LoginResponse>>(
      API_URL_local + "Accounts/refresh",
      {},
      { withCredentials: true }
    );
  }
}
