import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { loginCases } from "./login/logInThunk";

export type AuthState = {
  accessToken: string | undefined;
  isAuthenticated: boolean;
  authFetchStatus: "idle" | "loading" | "succeeded" | "failed";
};

const initialAuthState: AuthState = {
  accessToken: undefined,
  isAuthenticated: false,
  authFetchStatus: "idle",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  selectors: {
    selectAccessToken: (state) => state.accessToken,
    selectIsAuthenticated: (state) => state.isAuthenticated,
    selectAuthFetchStatus: (state) => state.authFetchStatus,
  },
  reducers: {
    tokenReceived: (
      state,
      {
        payload,
      }: PayloadAction<{
        accessToken: string;
      }>
    ) => {
      state.accessToken = payload.accessToken;
      state.isAuthenticated = true;
      state.authFetchStatus = "succeeded";
    },
    logOut: (state) => {
      state.accessToken = undefined;
      state.authFetchStatus = "idle";
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    // loginCases(builder);
  },
});

export const authActions = authSlice.actions;

export const authSelectors = authSlice.selectors;

export default authSlice.reducer;
