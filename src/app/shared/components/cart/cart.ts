import { CurrencyPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../interfaces/product-interface';
import { ShoppingCartItem } from '../../interfaces/shooping-cart-interface';
import { ModalManager } from '../../services/modal-manager';
import { CartItem } from '../cart-item/cart-item';
import { ShoopingCartManager } from './../../services/shooping-cart-manager';

@Component({
  selector: 'nexus-cart',
  imports: [CartItem, CurrencyPipe, ReactiveFormsModule],
  templateUrl: './cart.html',
  styles: ``,
})
export class Cart {
  protected readonly shoppingCartManager = inject<ShoopingCartManager>(ShoopingCartManager);
  protected readonly modalManager = inject<ModalManager<Product>>(ModalManager);
  protected readonly formBuilder = inject(FormBuilder);

  protected readonly items = this.shoppingCartManager.getCartItems();

  protected readonly discount = this.shoppingCartManager.totalDiscount;
  protected readonly subTotalPrice = this.shoppingCartManager.subTotalPrice;
  protected readonly totalPrice = this.shoppingCartManager.totalPrice;

  protected readonly isProcessing = signal(false);

  protected readonly checkoutForm = this.formBuilder.group({
    deliveryOption: ['coworking', Validators.required],
  });

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

  clearCart() {
    this.shoppingCartManager.clearCart();
  }

  async finishPurchase() {
    if (this.checkoutForm.invalid || this.items().length === 0) {
      return;
    }

    this.isProcessing.set(true);

    await new Promise((resolve) => setTimeout(resolve, 300));

    const deliveryOption = this.checkoutForm.value.deliveryOption;
    const deliveryMessage =
      deliveryOption === 'coworking'
        ? 'Tu pedido será entregado en tu mesa de co-working'
        : 'Tu pedido estará listo para retirar en el mostrador de cafetería';

    this.shoppingCartManager.clearCart();
    this.checkoutForm.reset({ deliveryOption: 'coworking' });
    this.isProcessing.set(false);

    alert(`¡Compra exitosa! 🎉\n\n${deliveryMessage}.\n\n¡Gracias por tu compra en Nexus!`);
  }
}
