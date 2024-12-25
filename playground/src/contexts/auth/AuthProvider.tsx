import { useEffect, useLayoutEffect, useState } from "react";
import { User } from "../../models/User";
import { AuthContext } from "./AuthContext";
import { AccountsService } from "../../services/accounts";
import { apiRequest } from "../../services/apiRequest";

type Props = { children: React.ReactNode };
export const AuthProvider = ({ children }: Props) => {
  const [accessToken, setAccessToken] = useState<string | undefined>();
  const [user, setUser] = useState<User | undefined>();
  const [someText, setSomeText] = useState<string | undefined>(
    "something fucking shit"
  );

  useEffect(() => {
    console.log("use effec - accessToken : ", accessToken);
    const accessTokenInterceptor = apiRequest.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${accessToken}`;
        return config;
      }
    );
    return () => {
      apiRequest.interceptors.request.eject(accessTokenInterceptor);
    };
  }, [accessToken]);

  // useLayoutEffect(() => {
  //   const refreshInterceptor = apiRequest.interceptors.response.use(
  //     (config) => config,
  //     async (error) => {
  //       if (error.response.status === 401) {
  //         const originalRequest = error.config;
  //         try {
  //           const response = await AccountsService.refresh();

  //           setAccessToken(response.data.result!.accessToken);

  //           originalRequest.headers["Authorization"] = `Bearer ${
  //             response.data.result!.accessToken
  //           }`;

  //           return apiRequest(originalRequest);
  //         } catch {
  //           setAccessToken(undefined);
  //         }
  //       }
  //       return Promise.reject(error);
  //     }
  //   );
  //   return () => apiRequest.interceptors.response.eject(refreshInterceptor);
  // }, []);

  const login = async (userEmail: string, password: string) => {
    try {
      const response = await AccountsService.login(userEmail, password);
      setAccessToken(response.data.result!.accessToken);
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
