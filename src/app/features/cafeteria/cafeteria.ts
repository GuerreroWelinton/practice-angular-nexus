import { Component, inject, OnInit } from '@angular/core';
import { ProductsGrid } from '../../shared/components/products-grid/products-grid';
import { ProductCardOrientation } from '../../shared/interfaces/product-interface';
import { CafeteriaApi } from './cafeteria-api';

@Component({
  selector: 'nexus-cafeteria',
  imports: [ProductsGrid],
  templateUrl: './cafeteria.html',
  styles: ``,
})
export class Cafeteria implements OnInit {
  protected readonly cafeteriaApi = inject(CafeteriaApi);

  readonly bestsellerProducts = this.cafeteriaApi.bestsellerProducts;
  readonly allProducts = this.cafeteriaApi.allProducts;

  readonly productCardOrientation = ProductCardOrientation;

  ngOnInit(): void {
    this.cafeteriaApi.loadMockCafeteriaProducts();
  }
}
