import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { CommonModule } from '@angular/common';
import { CartProductListComponent } from './cart-product-list/cart-product-list.component';

@Component({
  selector: 'app-cart-modal',
  standalone: true,
  imports: [CommonModule, CartProductListComponent],
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.scss'
})
export class CartModalComponent {
  constructor(private cartService: CartService) {}

  handleClose() {
    this.cartService.setIsCartOpen(false);
  }

  get isCartOpen() {
    return this.cartService.getIsCartOpen();
  }
}
