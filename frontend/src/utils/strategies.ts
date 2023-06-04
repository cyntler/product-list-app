import { ProductCategory } from '../../../shared/models';

export const PRODUCT_CATEGORY_NAME_STRATEGY: Record<ProductCategory, string> = {
  [ProductCategory.DISPLAY]: 'Displays',
  [ProductCategory.LAPTOP]: 'Laptops',
  [ProductCategory.SMARTPHONE]: 'Smartphones',
};
