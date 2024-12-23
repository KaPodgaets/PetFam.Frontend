import { createContext } from "react";
import { User } from "../../models/User";

type AuthContextType = {
  accessToken: string | undefined;
  user: User | undefined;
  login: (userEmail: string, password: string) => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
