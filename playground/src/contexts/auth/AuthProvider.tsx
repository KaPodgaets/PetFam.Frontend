import { useEffect, useLayoutEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { AccountsService } from "../../services/AccountsService";
import { axiosInstance } from "../../services/apiRequest";

type Props = { children: React.ReactNode };
export const AuthProvider = ({ children }: Props) => {
  const [accessToken, setAccessToken] = useState<string | undefined>();

  useEffect(() => {
    const accessTokenInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${accessToken}`;
        return config;
      }
    );
    return () => {
      axiosInstance.interceptors.request.eject(accessTokenInterceptor);
    };
  }, [accessToken]);

  useLayoutEffect(() => {
    const refreshInterceptor = axiosInstance.interceptors.response.use(
      (config) => config,
      async (error) => {
        if (error.response.status === 401) {
          const originalRequest = error.config;
          try {
            const response = await AccountsService.refresh();

            setAccessToken(response.data.result!.accessToken);

            originalRequest.headers["Authorization"] = `Bearer ${
              response.data.result!.accessToken
            }`;

            return axiosInstance(originalRequest);
          } catch {
            setAccessToken(undefined);
          }
        }
        return Promise.reject(error);
      }
    );
    return () => axiosInstance.interceptors.response.eject(refreshInterceptor);
  }, []);

  const login = async (userEmail: string, password: string) => {
    try {
      const response = await AccountsService.login(userEmail, password);
      setAccessToken(response.data.result!.accessToken);
    } catch (error) {
      throw new Error("something went wrong while login");
    }
  };

  return (
    <AuthContext.Provider value={{ accessToken, login }}>
      {children}
    </AuthContext.Provider>
  );
};
