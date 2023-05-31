import { Schema, model } from 'mongoose';

import { Product, ProductCategory } from '../../../shared/models';

export const productSchema = new Schema<Product>({
  name: {
    type: String,
    required: [true, 'The name is required'],
    maxlength: [100, 'The name max length is 100'],
  },
  price: {
    type: Number,
    required: [true, 'The price is required'],
    min: [0, 'The price must be more than 0'],
  },
  quantity: {
    type: Number,
    required: [true, 'The quantity is required'],
    min: [0, 'The quantity must be more than 0'],
  },
  productionDate: {
    type: String,
    required: [true, 'The production date is required'],
  },
  category: {
    type: String,
    enum: Object.values(ProductCategory),
    required: [true, 'The category is required'],
  },
  description: {
    type: String,
    maxlength: [2000, 'The description max length is 2000'],
  },
});

export const ProductModel = model('Product', productSchema);
