import { Request, Response } from 'express';

import { ProductModel } from '../models/productModel';

export const getProducts = async (_req: Request, res: Response) =>
  res.json({
    products: await ProductModel.find(),
  });

export const createProduct = async (req: Request, res: Response) => {
  const product = await ProductModel.create(req.body);

  return res.json(product.toObject());
};

export const editProduct = async (req: Request, res: Response) => {
  const product = await ProductModel.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
  );

  return res.json(product.toObject());
};

export const deleteProduct = async (req: Request, res: Response) => {
  const product = await ProductModel.deleteOne({ _id: req.params.id });

  return res.json(product.deletedCount);
};
