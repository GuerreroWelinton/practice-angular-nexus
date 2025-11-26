export interface CafeteriaProduct {
  id: number;
  name: string;
  price: number;
  shortDescription: string;
  longDescription: string;
  category: CafeteriaProductCategory[];
  imageUrl: string;
  bestseller?: boolean;
  discountPercentage?: number;
}

export enum CafeteriaProductCategory {
  Beverages = 'Bebidas',
  Coffee = 'Café',
  Food = 'Comida',
  Pastries = 'Pastelería',
  Desserts = 'Postres',
  Breakfast = 'Desayuno',
  Salads = 'Ensaladas',
  Tea = 'Té',
  Juice = 'Jugo',
  Sandwiches = 'Sándwiches',
}
