import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { LoginResponse } from "../types/LoginResponse";
import { authApi } from "../authApi";
import { getErrorMessage } from "../../../shared/utils/getErrorMessage";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { AuthState } from "../authSlice";

export const loginThunk = createAsyncThunk<
  LoginResponse,
  { userEmail: string; password: string }
>("auth/login", async (request, { dispatch, rejectWithValue, extra }) => {
  try {
    const response = await dispatch(
      authApi.endpoints.login.initiate(request)
    ).unwrap();
    console.log(response);
    return response;
  } catch (error) {
    const errorMessage = getErrorMessage(
      error as FetchBaseQueryError | undefined
    );
    return rejectWithValue(errorMessage);
  }
});

export const loginCases = (builder: ActionReducerMapBuilder<AuthState>) => {
  builder
    .addCase(loginThunk.pending, (state) => {
      state.authFetchStatus = "loading";
    })
    .addCase(loginThunk.fulfilled, (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.isAuthenticated = true;
      state.authFetchStatus = "succeeded";
    })
    .addCase(loginThunk.rejected, (state, action) => {
      state.authFetchStatus = "failed";
    });
};
