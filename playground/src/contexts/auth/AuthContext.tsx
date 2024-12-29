import { createContext } from "react";

type AuthContextType = {
  accessToken: string | undefined;
  login: (userEmail: string, password: string) => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
