import { computed, Injectable, signal } from '@angular/core';
import { BOOKSTORE_PRODUCTS_MOCK } from '../../core/data/bookstore-mock-data';
import { Product, ProductSource } from '../../shared/interfaces/product-interface';
import { calculateDiscountedPrice } from '../../shared/utils/product-util';
import { BookstoreProduct } from './bookstore-product-interface';

@Injectable({
  providedIn: 'root',
})
export class BookstoreApi {
  // protected readonly httpClient = inject(HttpClient);

  protected readonly bookstoreProducts = signal<BookstoreProduct[]>([]);

  readonly bestsellerProducts = computed<Product[]>(() => {
    return this.bookstoreProducts()
      .filter((product) => product.bestseller)
      .map((product) => this.mapToProduct(product));
  });

  readonly allProducts = computed<Product[]>(() => {
    return this.bookstoreProducts().map((product) => this.mapToProduct(product));
  });

  readonly discountedProducts = computed<Product[]>(() => {
    return this.bookstoreProducts()
      .filter((product) => product.discountPercentage)
      .map((product) => this.mapToProduct(product));
  });

  private mapToProduct(product: BookstoreProduct): Product {
    return {
      id: product.id,
      source: ProductSource.Bookstore,
      name: product.name,
      author: product.author,
      year: product.year,
      price: product.price,
      shortDescription: product.shortDescription,
      longDescription: product.longDescription,
      category: product.category,
      imageUrl: product.imageUrl,
      discountPercentage: product.discountPercentage,
      discountedPrice: calculateDiscountedPrice(product.price, product.discountPercentage),
    };
  }

  loadMockBookstoreProducts() {
    this.bookstoreProducts.set(BOOKSTORE_PRODUCTS_MOCK);
  }
}
