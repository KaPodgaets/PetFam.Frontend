import React from "react";
import { AuthContext } from "./AuthContext";

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthContext");
  }
  return context;
};
