import { useLayoutEffect, useState } from "react";
import { User } from "../../models/User";
import { AuthContext } from "./AuthContext";
import { AccountsService } from "../../services/accounts";
import { apiRequest } from "../../services/apiRequest";

type Props = { children: React.ReactNode };
export const AuthProvider = ({ children }: Props) => {
  const [accessToken, setAccessToken] = useState<string | undefined>(undefined);
  const [refreshToken, setRefreshToken] = useState<string | undefined>(
    undefined
  );
  const [user, setUser] = useState<User | undefined>(undefined);

  useLayoutEffect(() => {
    apiRequest.interceptors.response.use(
      (config) => config,
      (error) => {
        if (error.response.status === 401) {
          AccountsService.refreshToken(refreshToken!);
        }
        return Promise.reject(error);
      }
    );
  }, []);
  const login = async (userEmail: string, password: string) => {
    try {
      const response = await AccountsService.login(userEmail, password);
      setAccessToken(response.data.result!.accessToken);
      setRefreshToken(response.data.result!.refreshToken);
    } catch (error) {
      throw new Error("something went wrong while login");
    }
  };

  return (
    <AuthContext.Provider value={{ accessToken, user, login }}>
      {children}
    </AuthContext.Provider>
  );
};
