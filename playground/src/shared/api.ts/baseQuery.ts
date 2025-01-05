import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5098/",
  credentials: "include",
  prepareHeaders: (headers) => {
    return headers;
  },
});
