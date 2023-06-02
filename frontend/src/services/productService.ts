import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Product } from '../../../shared/models';

console.log('import.meta.env', import.meta.env);

export const productService = createApi({
  reducerPath: 'productService',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => '/v1/products',
    }),
  }),
});

export const { useGetProductsQuery } = productService;
