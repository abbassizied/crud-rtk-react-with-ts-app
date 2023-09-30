// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IProduct } from "./type";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    // get All products
    getAllProducts: builder.query<IProduct[], void>({
      query: () => "/products/",
      providesTags: ['Product'],
    }),
    // get a Product by title
    getProductByTitle: builder.query({
      query: (title) => `/products/${title}`,
      providesTags: ['Product'],
    }),
    // get a product by id
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: ['Product'],
    }),
    // Add a new Product
    addNewProduct: builder.mutation({
      query: (product) => ({
        url: "/products/",
        method: "POST",
        body: product,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        invalidatesTags: ['Product'],
      }),
    }),
    // Update a product by id
    updateProduct: builder.mutation({
      query: ({ id, product }) => ({
        url: `/products/${id}`,
        method: "PATCH",
        body: product,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        invalidatesTags: ['Product'],
      }),
    }),
    // Delete a prodct by id
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "Delete",
        body: id,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        invalidatesTags: ['Product'],
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProductByTitleQuery,
  useGetProductByIdQuery,
  useGetAllProductsQuery,
  useAddNewProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
