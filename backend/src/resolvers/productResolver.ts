import { Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';

import { ProductModel } from '../models/productModel';

export const getProducts = async (_req: Request, res: Response) =>
  res.json(await ProductModel.find());

export const getProduct = async (req: Request, res: Response) => {
  if (!isValidObjectId(req.params.id)) {
    throw new Error('Invalid id');
  }

  res.json(
    await ProductModel.findOne({
      _id: req.params.id,
    }),
  );
};

export const addProduct = async (req: Request, res: Response) => {
  const product = new ProductModel(req.body);

  try {
    await product.validate();
  } catch (err) {
    return res.status(400).json({
      validationErrors: err.errors,
    });
  }

  await product.save();
  return res.json(product.toObject());
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = await ProductModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { runValidators: true },
    );

    return res.json(product.toObject());
  } catch (err) {
    return res.status(400).json({
      validationErrors: err.errors,
    });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const product = await ProductModel.deleteOne({ _id: req.params.id });

  return res.json(product.deletedCount);
};
