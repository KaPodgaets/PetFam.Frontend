import { baseApi } from "../../shared/api.ts/baseApi";
import { Envelope } from "../../shared/types/Envelope";
import { LoginResponse } from "./types/LoginResponse";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<
      LoginResponse,
      { userEmail: string; password: string }
    >({
      query: ({ userEmail, password }) => ({
        url: "accounts/login",
        method: "POST",
        body: { userEmail, password },
      }),
      transformResponse: (res: Envelope<LoginResponse>) => {
        return res.result!;
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
