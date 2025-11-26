import { Component, computed, inject, input } from '@angular/core';
import { Product, ProductCardOrientation } from '../../interfaces/product-interface';
import { ModalManager } from '../../services/modal-manager';
import { ShoopingCartManager } from '../../services/shooping-cart-manager';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'nexus-products-grid',
  imports: [ProductCard],
  templateUrl: './products-grid.html',
  styles: ``,
})
export class ProductsGrid {
  protected readonly modalManager = inject<ModalManager<Product>>(ModalManager);
  protected readonly shoppingCartManager = inject<ShoopingCartManager>(ShoopingCartManager);

  readonly products = input.required<Product[]>();
  readonly orientation = input.required<ProductCardOrientation>();

  readonly productCardOrientation = ProductCardOrientation;

  readonly columnClasses = computed(() => {
    return this.orientation() === ProductCardOrientation.Vertical
      ? 'col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'
      : 'col-12 col-md-6 col-xl-3';
  });

  addToCart(product: Product) {
    this.shoppingCartManager.addToCart(product);
  }

  addToFavorites(product: Product) {
    // TODO: Implement favorites functionality
  }

  viewDetails(product: Product) {
    this.modalManager.openProductDetailsModal(product);
  }
}
