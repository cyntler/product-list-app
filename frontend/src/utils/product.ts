import { Product } from '../../../shared/models';

export const getInitialProductFormValues = (
  product?: Product,
): Partial<Product> => ({
  _id: product?._id,
  name: product?.name ?? '',
  price: product?.price,
  quantity: product?.quantity,
  productionDate: product?.productionDate,
  category: product?.category,
  description: product?.description ?? '',
});
