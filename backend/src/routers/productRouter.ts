import { Router } from 'express';

import {
  addProduct,
  deleteProduct,
  updateProduct,
  getProduct,
  getProducts,
} from '../resolvers/productResolver';

export const productRouter = Router();

productRouter.get('/', getProducts);
productRouter.get('/:id', getProduct);
productRouter.post('/', addProduct);
productRouter.put('/:id', updateProduct);
productRouter.delete('/:id', deleteProduct);
