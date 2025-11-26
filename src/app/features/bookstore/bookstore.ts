import { Component, inject, OnInit } from '@angular/core';
import { ProductsGrid } from '../../shared/components/products-grid/products-grid';
import { ProductCardOrientation } from '../../shared/interfaces/product-interface';
import { BookstoreApi } from './bookstore-api';

@Component({
  selector: 'nexus-bookstore',
  imports: [ProductsGrid],
  templateUrl: './bookstore.html',
  styles: ``,
})
export class Bookstore implements OnInit {
  protected readonly bookstoreApi = inject(BookstoreApi);

  readonly bestsellerProducts = this.bookstoreApi.bestsellerProducts;
  readonly allProducts = this.bookstoreApi.allProducts;

  readonly productCardOrientation = ProductCardOrientation;

  ngOnInit(): void {
    this.bookstoreApi.loadMockBookstoreProducts();
  }
}
