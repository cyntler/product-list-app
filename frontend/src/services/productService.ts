import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Product } from '../../../shared/models';

export const productService = createApi({
  reducerPath: 'productService',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => '/v1/products',
      providesTags: ['Products'],
    }),
    getProduct: builder.query<Product, { id: Product['_id'] }>({
      query: ({ id }) => `/v1/products/${id}`,
      providesTags: (_result, _error, { id }) => [{ type: 'Products', id }],
    }),
    addProduct: builder.mutation<void, { data: Omit<Partial<Product>, '_id'> }>(
      {
        query: ({ data }) => ({
          url: `/v1/products`,
          method: 'POST',
          body: data,
        }),
        invalidatesTags: ['Products'],
      },
    ),
    updateProduct: builder.mutation<
      void,
      { id: Product['_id']; data: Omit<Partial<Product>, '_id'> }
    >({
      query: ({ id, data }) => ({
        url: `/v1/products/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Products'],
    }),
    deleteProduct: builder.mutation<void, { id: Product['_id'] }>({
      query: ({ id }) => ({
        url: `/v1/products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Products'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productService;
