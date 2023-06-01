import { Navigate, createBrowserRouter } from 'react-router-dom';

import { NotFound } from './screens/NotFound/NotFound';
import { ProductList } from './screens/ProductList';
import { ProductAdd } from './screens/ProductAdd';
import { ProductEdit } from './screens/ProductEdit/ProductEdit';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/products" replace />,
    errorElement: <NotFound />,
  },
  { path: '/products', element: <ProductList /> },
  { path: '/products/add', element: <ProductAdd /> },
  { path: '/products/:id/edit', element: <ProductEdit /> },
]);
