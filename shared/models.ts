export interface Product {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  productionDate: string;
  category: ProductCategory;
  description: string;
}

export enum ProductCategory {
  SMARTPHONE = 'SMARTPHONE',
  LAPTOP = 'LAPTOP',
  DISPLAY = 'DISPLAY',
}
