import { CurrencyPipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { ShoppingCartItem } from '../../interfaces/shooping-cart-interface';
import { FeatherIcon } from '../feather-icon/feather-icon';

@Component({
  selector: 'nexus-cart-item',
  imports: [FeatherIcon, CurrencyPipe],
  templateUrl: './cart-item.html',
  styles: ``,
})
export class CartItem {
  item = input.required<ShoppingCartItem>();

  displayProductDetails = output<ShoppingCartItem>();
  increaseQuantity = output<ShoppingCartItem>();
  decreaseQuantity = output<ShoppingCartItem>();
  removeFromCart = output<ShoppingCartItem>();
}
