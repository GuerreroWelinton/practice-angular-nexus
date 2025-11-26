import { computed, effect, Injectable, signal } from '@angular/core';
import { ShoppingCartItem } from '../interfaces/shooping-cart-interface';
import { Product } from '../interfaces/product-interface';

@Injectable({
  providedIn: 'root',
})
export class ShoopingCartManager {
  protected readonly cartItems = signal<ShoppingCartItem[]>(this.getCartItemsFromLocalStorage());

  readonly totalCartItems = computed<number>(() =>
    this.cartItems().reduce((total, item) => total + item.quantity, 0),
  );

  readonly subTotalPrice = computed<number>(() =>
    this.cartItems().reduce((total, item) => total + item.product.price * item.quantity, 0),
  );

  readonly totalDiscount = computed<number>(() =>
    this.cartItems().reduce((total, item) => total + this.computeItemDiscount(item), 0),
  );

  readonly totalPrice = computed<number>(() => this.subTotalPrice() - this.totalDiscount());

  constructor() {
    effect(() => {
      localStorage.setItem('shoppingCart', JSON.stringify(this.cartItems()));
    });
  }

  protected getCartItemsFromLocalStorage(): ShoppingCartItem[] {
    const storedCart = localStorage.getItem('shoppingCart');
    return storedCart ? JSON.parse(storedCart) : [];
  }

  protected computeItemDiscount(cartItem: ShoppingCartItem): number {
    const { product, quantity } = cartItem;
    if (product.discountPercentage && product.discountedPrice) {
      return (product.price - product.discountedPrice) * quantity;
    }
    return 0;
  }

  getCartItems() {
    return this.cartItems.asReadonly();
  }

  protected isProductInCart(productId: number) {
    return this.cartItems().some((item) => item.product.id === productId);
  }

  addToCart(product: Product) {
    if (!this.isProductInCart(product.id)) {
      this.cartItems.update((items) => [...items, { product, quantity: 1 }]);
      return;
    }

    this.cartItems.update((items) =>
      items.map((item) =>
        item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  removeFromCart(productId: number) {
    this.cartItems.update((items) => items.filter((item) => item.product.id !== productId));
  }

  increaseQuantity(productId: number) {
    this.cartItems.update((items) =>
      items.map((item) =>
        item.product.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  decreaseQuantity(productId: number) {
    this.cartItems.update((items) =>
      items.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item,
      ),
    );
  }

  clearCart() {
    this.cartItems.set([]);
  }
}
