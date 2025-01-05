import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginCases } from "./login/loginThunk";

export type AuthState = {
  accessToken: string | undefined;
  isAuthenticated: boolean;
};

const initialState: AuthState = {
  accessToken: undefined,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  selectors: {
    selectAccessToken: (state) => state.accessToken,
  },
  reducers: {
    tokenRecieved(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.accessToken = undefined;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    loginCases(builder);
  },
});

// export const { tokenRecieved, logout } = authSlice.actions;
export const authActions = authSlice.actions;
export default authSlice.reducer;

export const selectAccessToken = authSlice.selectors.selectAccessToken;
