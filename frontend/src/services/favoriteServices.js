import { baseApi } from "../api/baseApi";

export const favoriteService = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addFavoriteProduct: builder.mutation({
      query: ({ userId, products }) => ({
        url: `favorite/product/${userId}`,
        method: "PUT",
        body: { products },
      }),
      transformResponse: (response) => response?.data?.result,
      transformErrorResponse: (response) => response?.data,
    }),
  }),
});

export const { useAddFavoriteProductMutation } = favoriteService;
