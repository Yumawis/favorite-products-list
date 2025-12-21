import { baseApi } from "../api/baseApi";

export const authService = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ documentNumber }) => ({
        url: "auth/login",
        method: "POST",
        body: { documentNumber },
      }),
      transformResponse: (response) => response?.data?.result,
      transformErrorResponse: (response) => response?.data,
    }),

    signUp: builder.mutation({
      query: ({ names, lastNames, nickname, documentNumber }) => ({
        url: "auth/sign-up",
        method: "POST",
        body: { names, lastNames, nickname, documentNumber },
      }),
      transformResponse: (response) => response?.data,
      transformErrorResponse: (response) => response?.data,
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = authService;
