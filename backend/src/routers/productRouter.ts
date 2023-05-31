import { Router } from 'express';

import {
  createProduct,
  deleteProduct,
  editProduct,
  getProducts,
} from '../resolvers/productResolver';

export const productRouter = Router();

productRouter.get('/', getProducts);
productRouter.post('/', createProduct);
productRouter.patch('/', editProduct);
productRouter.delete('/', deleteProduct);
