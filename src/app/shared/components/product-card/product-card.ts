import { CurrencyPipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Product, ProductCardOrientation, ProductSource } from '../../interfaces/product-interface';
import { FeatherIcon } from '../feather-icon/feather-icon';

@Component({
  selector: 'nexus-product-card',
  imports: [FeatherIcon, CurrencyPipe],
  templateUrl: './product-card.html',
  styles: ``,
})
export class ProductCard {
  readonly product = input.required<Product>();
  readonly orientation = input.required<ProductCardOrientation>();

  readonly addToCart = output<Product>();
  readonly addToFavorites = output<Product>();
  readonly viewDetails = output<Product>();

  readonly productCardOrientation = ProductCardOrientation;
  readonly productSource = ProductSource;
}
