import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { LoginResponse } from "../types/LoginResponse";
import { authApi } from "../authApi";
import { AuthState } from "../authSlice";

export const loginThunk = createAsyncThunk<
  LoginResponse,
  { userEmail: string; password: string }
>("auth/login", async (request, { dispatch, rejectWithValue }) => {
  try {
    const response = await dispatch(
      authApi.endpoints.login.initiate(request)
    ).unwrap();
    return response;
  } catch (error) {
    return rejectWithValue("error");
  }
});

export const loginCases = (builder: ActionReducerMapBuilder<AuthState>) => {
  builder
    .addCase(loginThunk.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = true;
    })
    .addCase(loginThunk.pending, () => {})
    .addCase(loginThunk.rejected, () => {});
};
