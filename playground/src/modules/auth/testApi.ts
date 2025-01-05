import { baseApi } from "../../shared/api.ts/baseApi";

export const testApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    test: builder.query<string, void>({
      query: () => "Accounts/test-without-authorization",
      transformResponse: (response: { result: string }) => response.result,
    }),
    testWithCredentials: builder.query<string, void>({
      query: () => "Accounts/test",
      transformResponse: (response: { result: string }) => response.result,
    }),
  }),
});

export const { useTestQuery, useTestWithCredentialsQuery } = testApi;
