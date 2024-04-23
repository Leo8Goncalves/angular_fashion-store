import { Injectable, signal } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  readonly isCartOpen = signal(false);
  readonly cartProductList = signal<IProduct[]>([]);

  getIsCartOpen() {
    return this.isCartOpen();
  }

  setIsCartOpen(value: boolean) {
    this.isCartOpen.set(value);
  }

  getProductList() {
    return this.cartProductList();
  }

  addProduct(product: IProduct) {
    if (
      !this.cartProductList().some(
        (currentProduct) => currentProduct.id === product.id
      )
    ) {
      this.cartProductList.update((cartProductList) => [
        ...cartProductList,
        product,
      ]);

      this.setIsCartOpen(true);
    } else {
      alert('Produto já adicionado ao carrinho.');
    }
  }

  removeProduct(removingId: number) {
    this.cartProductList.update((cartProductList) =>
      cartProductList.filter((product) => product.id !== removingId)
    );
  }
}
