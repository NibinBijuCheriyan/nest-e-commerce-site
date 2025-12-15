import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Services {
  constructor (private https:HttpClient) { }
    getProducts() {
      return this.https.get('https://dummyjson.com/products');
  }
  getSingleProduct(id: string) {
    return this.https.get(`https://dummyjson.com/products/${id}`);
  }                                             
  

}