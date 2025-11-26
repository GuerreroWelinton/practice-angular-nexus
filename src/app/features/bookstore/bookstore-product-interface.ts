export interface BookstoreProduct {
  id: number;
  name: string;
  author: string;
  year: number;
  price: number;
  shortDescription: string;
  longDescription: string;
  category: BookstoreProductCategory[];
  imageUrl: string;
  bestseller?: boolean;
  discountPercentage?: number;
}

export enum BookstoreProductCategory {
  Fiction = 'Ficción',
  NonFiction = 'No Ficción',
  Programming = 'Programación',
  Science = 'Ciencia',
  Business = 'Negocios',
  SelfHelp = 'Autoayuda',
  History = 'Historia',
  Art = 'Arte',
  Biography = 'Biografía',
  Technology = 'Tecnología',
  Philosophy = 'Filosofía',
  Psychology = 'Psicología',
}
