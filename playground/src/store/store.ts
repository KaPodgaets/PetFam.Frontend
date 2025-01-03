import { configureStore } from "@reduxjs/toolkit/react";
import authReducer from "../modules/auth/authSlice";
import { baseApi } from "../shared/baseApi";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
