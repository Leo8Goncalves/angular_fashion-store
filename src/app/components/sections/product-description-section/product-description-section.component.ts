import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductRequest } from '../../../api/product.request';
import { IProduct } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-product-description-section',
  standalone: true,
  imports: [],
  templateUrl: './product-description-section.component.html',
  styleUrl: './product-description-section.component.scss',
})
export class ProductDescriptionSectionComponent {
  readonly productSignal = signal<IProduct | null>(null);
  constructor(
    private route: ActivatedRoute,
    private productRequest: ProductRequest
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
}
