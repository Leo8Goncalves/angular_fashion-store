import { Component } from '@angular/core';
import { CartService } from '../../../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-product-list.component.html',
  styleUrl: './cart-product-list.component.scss'
})
export class CartProductListComponent {
  constructor(private cartService: CartService) {}

  get cartProductList() {
    return this.cartService.getProductList();
  }

  get total() {
    return this.cartProductList.reduce((accValue, product) => {
      return accValue + product.price
    }, 0)
  }

  handleRemove(removingId: number) {
    this.cartService.removeProduct(removingId)
  }
}
