import { baseApi } from "../api/baseApi";

export const favoriteService = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addFavoriteProduct: builder.mutation({
      query: ({ userId, productId }) => ({
        url: `favorite/product/${userId}`,
        method: "PUT",
        body: { productId },
      }),
      transformResponse: (response) => response?.data,
      transformErrorResponse: (response) => response?.data,
    }),
  }),
});

export const { useAddFavoriteProductMutation } = favoriteService;
