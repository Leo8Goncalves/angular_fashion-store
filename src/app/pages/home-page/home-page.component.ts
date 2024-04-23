import { Component, signal } from '@angular/core';
import { ProductRequest } from '../../api/product.request';
import { IProduct } from '../../interfaces/product.interface';
import { ProductListSectionComponent } from '../../components/sections/product-list-section/product-list-section.component';
import { HeroSectionComponent } from '../../components/sections/hero-section/hero-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ProductListSectionComponent, HeroSectionComponent],
  providers:[ProductRequest],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  readonly productListSignal = signal<IProduct[]>([]);

  constructor(private productRequest: ProductRequest){
    this.productRequest.getProductList().subscribe((data) =>{
      this.productListSignal.set(data);
    })
  }

  get productList(){
    return this.productListSignal();
  }
}
