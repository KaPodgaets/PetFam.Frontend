import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const BASE_URL = "http://localhost:5098/";
export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: () => ({}),
});
