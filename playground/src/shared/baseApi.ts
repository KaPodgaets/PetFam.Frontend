import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithRefresh } from "./baseQuery";

export const baseApi = createApi({
  baseQuery: baseQueryWithRefresh,
  endpoints: () => ({}),
  tagTypes: ["Auth", "Pets"],
});
