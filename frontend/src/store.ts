import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';

import { productService } from './services/productService';

const services = [productService];

export const store = configureStore({
  reducer: services.reduce(
    (acc, service) => ({ ...acc, [service.reducerPath]: service.reducer }),
    {},
  ),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      services.map((service) => service.middleware),
    ),
});

setupListeners(store.dispatch);
