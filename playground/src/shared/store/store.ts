import { configureStore } from "@reduxjs/toolkit/react";
import { baseApi } from "../api.ts/baseApi";
import authReducer from "../../modules/auth/authSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
