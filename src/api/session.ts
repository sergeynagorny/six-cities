import api from "@lib/axios";
import { AxiosResponse } from "axios";


export interface ILoginData {
  email: string;
  password: string;
};

export interface ICurrentUser {
  id: number,
  is_pro: boolean,
  name: string,
  avatar_url: string,
  email: string,
}

export interface IAuthResponse extends AxiosResponse  {
  data: ICurrentUser;
}

const createSession = (loginData: ILoginData): Promise<IAuthResponse> =>
  api.post("login", loginData)

const getCurrentAccount = (): Promise<IAuthResponse> =>
  api.get("login")


export const sessionApi = {
  createSession,
  getCurrentAccount
}