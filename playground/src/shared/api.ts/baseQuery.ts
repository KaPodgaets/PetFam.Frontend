import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AppState } from "../store/redux";
import { Mutex } from "async-mutex";
import { Envelope } from "../types/Envelope";
import { LoginResponse } from "../../modules/auth/types/LoginResponse";
import { authActions } from "../../modules/auth/authSlice";

export const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5098/",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    let state = getState() as AppState;
    const accessToken = state.auth.accessToken;
    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }
    return headers;
  },
});

const mutex = new Mutex();

export const baseQueryWithRefresh: typeof baseQuery = async (
  args,
  api,
  extraOptions
) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();

      try {
        const authResponse = await baseQuery(
          {
            url: "accounts/refresh",
            method: "POST",
          },
          api,
          extraOptions
        );

        if (authResponse.data) {
          const data = authResponse.data as Envelope<LoginResponse>;

          api.dispatch(authActions.tokenRecieved(data.result!.accessToken));

          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(authActions.logout());
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};
