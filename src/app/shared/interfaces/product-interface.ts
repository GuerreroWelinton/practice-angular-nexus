export interface Product {
  id: number;
  name: string;
  price: number;
  shortDescription: string;
  longDescription: string;
  category: string[];
  imageUrl: string;
  source: ProductSource;

  year?: number;
  author?: string;
  discountPercentage?: number;
  discountedPrice?: number;
}

export enum ProductSource {
  Bookstore = 'bookstore',
  Cafeteria = 'cafeteria',
}

export enum ProductCardOrientation {
  Vertical = 'vertical',
  Horizontal = 'horizontal',
}
