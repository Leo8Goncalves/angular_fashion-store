import { Component, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductRequest } from '../../../api/product.request';
import { IProduct } from '../../../interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-description-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-description-section.component.html',
  styleUrl: './product-description-section.component.scss',
})
export class ProductDescriptionSectionComponent {
  readonly productSignal = signal<IProduct | null>(null);
  constructor(
    private route: ActivatedRoute,
    private productRequest: ProductRequest,
    private cartService: CartService
  ) {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');

      if (id) {
        this.productRequest.getProduct(id).subscribe((data) => {
          this.productSignal.set(data);
        });
      }
    });
  }

  get product() {
    return this.productSignal();
  }

  handleApp(product: IProduct) {
    this.cartService.addProduct(product)
  }
}
