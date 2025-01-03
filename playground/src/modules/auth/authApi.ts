// import { baseApi } from "../../shared/baseApi";
// import { Envelope } from "../../types/Envelope";
// import { LoginResponse } from "./types/LoginResponse";

// export const authApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     login: builder.mutation<
//       LoginResponse,
//       { userEmail: string; password: string }
//     >({
//       query: ({ userEmail, password }) => ({
//         url: "/accounts/login",
//         body: { userEmail, password },
//         method: "POST",
//       }),
//       transformResponse: (res: Envelope<LoginResponse>) => {
//         return res.result!;
//       },
//     }),
//     refreshToken: builder.mutation<LoginResponse, void>({
//       query: () => ({
//         url: "/accounts/refresh",
//         method: "POST",
//       }),
//       transformResponse: (res: Envelope<LoginResponse>) => res.result!,
//     }),
//     logout: builder.mutation<void, void>({
//       query: () => ({ url: "/accounts/logout", method: "POST" }),
//     }),

//     register: builder.mutation<
//       void,
//       { email: string; userName: string; password: string }
//     >({
//       query: ({ email, userName, password }) => ({
//         url: "/accounts/registration",
//         method: "POST",
//         body: { email, userName, password },
//       }),
//       transformResponse: (res: void) => res!,
//     }),
//   }),
// });

// export const { useLoginMutation, useRefreshTokenMutation } = authApi;
