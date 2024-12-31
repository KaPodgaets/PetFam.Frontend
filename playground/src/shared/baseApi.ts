import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/store";
import { Mutex } from "async-mutex";
import { Envelope } from "../types/Envelope";
import { LoginResponse } from "../modules/auth/types/LoginResponse";
import { authActions } from "../modules/auth/authSlice";

const BASE_URL = "http://localhost:5098";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const accessToken = state.auth.accessToken;

    if (accessToken) {
      headers.set("authorization", `Bearer ${accessToken}`);
    }
    return headers;
  },
});

const mutex = new Mutex();

const baseQueryWithRefresh = async (args: any, api: any, extraOptions: any) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();

      try {
        const authResponse = await baseQuery(
          { url: "/Accounts/login", method: "POST" },
          api,
          extraOptions
        );

        if (authResponse.data) {
          const data = authResponse.data as Envelope<LoginResponse>;
          api.dispatch(
            authActions.tokenReceived({
              accessToken: data.result!.accessToken,
            })
          );

          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(authActions.logOut());
        }
      } finally {
        release();
      }
    }
  }

  return result;
};

export const baseApi = createApi({
  baseQuery: baseQueryWithRefresh,
  endpoints: () => ({}),
  tagTypes: ["Auth", "Pets"],
});
