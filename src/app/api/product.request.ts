import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';

@Injectable({ providedIn: 'root' })
export class ProductRequest {
  private BASE_URL = 'https://product-fake-api.onrender.com';

  constructor(private http: HttpClient) {}

  getProductList() {
    return this.http.get<IProduct[]>(`${this.BASE_URL}/products`);
  }

  getProduct(productId: string) {
    return this.http.get<IProduct>(`${this.BASE_URL}/products/${productId}`);
  }
}
