import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'product/:id', component: ProductPageComponent },
];
