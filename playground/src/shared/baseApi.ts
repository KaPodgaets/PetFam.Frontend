import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/store";
const BASE_URL = "http://localhost:5098";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const accessToken = state.auth.accessToken;
    cosnt test = state.
    // If we have a token set in state, let's assume that we should be passing it.
    if (accessToken) {
      headers.set("authorization", `Bearer ${accessToken}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, }),
  endpoints: () => ({}),
  tagTypes: ["Pets"],
});
