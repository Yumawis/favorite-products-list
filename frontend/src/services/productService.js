import { baseApi } from "../api/baseApi";

export const productService = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: ({ name, status, stock, image }) => ({
        url: "product",
        method: "POST",
        body: { name, status, stock, image },
      }),
      transformResponse: (response) => response?.data?.result,
      transformErrorResponse: (response) => response?.data,
    }),

    getAllProducts: builder.query({
      query: () => ({
        url: "product",
        method: "GET",
      }),
      transformResponse: (response) => response?.data?.result,
      transformErrorResponse: (response) => response?.data,
    }),

    qualifyProduct: buildErrorMessage.mutation({
      query: ({ productId, qualifyNumber }) => ({
        url: "product/qualify",
        method: "POST",
        body: { productId, qualifyNumber },
      }),
      transformResponse: (response) => response?.data?.result,
      transformErrorResponse: (response) => response?.data,
    }),
  }),
});

export const { useCreateProductMutation, useGetAllProductsQuery, useQualifyProductMutation } =
  productService;
