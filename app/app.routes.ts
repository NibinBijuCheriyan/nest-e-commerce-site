import { Routes } from '@angular/router';
import { Home } from './Page/home/home';
import { Product } from './Page/product/product';
import { Contact } from './Page/contact/contact';
import { ProductDetails } from './Page/product-details/product-details';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'products', component: Product }, // Changed from 'product' to 'products'
    { path: 'products/:id', component: ProductDetails },
    { path: 'contact', component: Contact }
];
