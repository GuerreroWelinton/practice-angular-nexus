import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Product } from '../../interfaces/product-interface';
import { ShoppingCartItem } from '../../interfaces/shooping-cart-interface';
import { ModalManager } from '../../services/modal-manager';
import { CartItem } from '../cart-item/cart-item';
import { ShoopingCartManager } from './../../services/shooping-cart-manager';

@Component({
  selector: 'nexus-cart',
  imports: [CartItem, CurrencyPipe],
  templateUrl: './cart.html',
  styles: ``,
})
export class Cart {
  protected readonly shoppingCartManager = inject<ShoopingCartManager>(ShoopingCartManager);
  protected readonly modalManager = inject<ModalManager<Product>>(ModalManager);

  protected readonly items = this.shoppingCartManager.getCartItems();

  protected readonly discount = this.shoppingCartManager.totalDiscount;
  protected readonly subTotalPrice = this.shoppingCartManager.subTotalPrice;
  protected readonly totalPrice = this.shoppingCartManager.totalPrice;

  displayProductDetails(item: ShoppingCartItem) {
    this.modalManager.openProductDetailsModal(item.product);
  }

  increaseQuantity(item: ShoppingCartItem) {
    this.shoppingCartManager.increaseQuantity(item.product.id);
  }

  decreaseQuantity(item: ShoppingCartItem) {
    this.shoppingCartManager.decreaseQuantity(item.product.id);
  }

  removeFromCart(item: ShoppingCartItem) {
    this.shoppingCartManager.removeFromCart(item.product.id);
  }
}
