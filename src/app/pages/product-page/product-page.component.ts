import { Component, signal } from '@angular/core';
import { ProductRequest } from '../../api/product.request';
import { IProduct } from '../../interfaces/product.interface';
import { ActivatedRoute } from '@angular/router';
import { ProductListSectionComponent } from '../../components/sections/product-list-section/product-list-section.component';
import { ProductDescriptionSectionComponent } from '../../components/sections/product-description-section/product-description-section.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductListSectionComponent, ProductDescriptionSectionComponent],
  providers: [ProductRequest],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent {
  readonly productListSignal = signal<IProduct[]>([]);

  constructor(
    private productRequest: ProductRequest,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');

      if (id) {
        this.productRequest.getProductList().subscribe((data) => {
          const newData = data.filter((product) => product.id !== Number(id));
          this.productListSignal.set(newData);
        });
      }
    });
  }

  get productList() {
    return this.productListSignal();
  }
}
