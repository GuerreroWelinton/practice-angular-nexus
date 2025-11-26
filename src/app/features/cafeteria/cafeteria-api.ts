import { computed, Injectable, signal } from '@angular/core';
import { CAFETERIA_PRODUCTS_MOCK } from '../../core/data/cafeteria-mock-data';
import { Product } from '../../shared/interfaces/product-interface';
import { calculateDiscountedPrice } from '../../shared/utils/product-util';
import { ProductSource } from '../../shared/interfaces/product-interface';
import { CafeteriaProduct } from './cafeteria-product-interface';

@Injectable({
  providedIn: 'root',
})
export class CafeteriaApi {
  // protected readonly httpClient = inject(HttpClient);

  protected readonly cafeteriaProducts = signal<CafeteriaProduct[]>([]);

  readonly bestsellerProducts = computed<Product[]>(() => {
    return this.cafeteriaProducts()
      .filter((product) => product.bestseller)
      .map((product) => this.mapToProduct(product));
  });

  readonly allProducts = computed<Product[]>(() => {
    return this.cafeteriaProducts().map((product) => this.mapToProduct(product));
  });

  readonly discountedProducts = computed<Product[]>(() => {
    return this.cafeteriaProducts()
      .filter((product) => product.discountPercentage)
      .map((product) => this.mapToProduct(product));
  });

  private mapToProduct(product: CafeteriaProduct): Product {
    return {
      id: product.id,
      source: ProductSource.Cafeteria,
      name: product.name,
      price: product.price,
      shortDescription: product.shortDescription,
      longDescription: product.longDescription,
      category: product.category,
      imageUrl: product.imageUrl,
      discountPercentage: product.discountPercentage,
      discountedPrice: calculateDiscountedPrice(product.price, product.discountPercentage),
    };
  }

  loadMockCafeteriaProducts() {
    this.cafeteriaProducts.set(CAFETERIA_PRODUCTS_MOCK);
  }
}
