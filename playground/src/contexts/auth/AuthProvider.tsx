import { useEffect, useState } from "react";
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
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    return () => {
      axiosInstance.interceptors.request.eject(accessTokenInterceptor);
    };
  }, [accessToken]);

  useEffect(() => {
    const refreshInterceptor = axiosInstance.interceptors.response.use(
      (config) => config,
      async (error) => {
        if (error.response.status === 401) {
          const originalRequest = error.config;
          if (!originalRequest._retry) {
            originalRequest._retry = true;

            try {
              const response = await AccountsService.refresh();
              const newAccessToken = response.data.result!.accessToken;

              console.log(accessToken);

              originalRequest.headers[
                "Authorization"
              ] = `Bearer ${newAccessToken}`;

              setAccessToken(response.data.result!.accessToken);
              console.log(accessToken);
              return axiosInstance(originalRequest);
            } catch {
              setAccessToken(undefined);
            }
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
