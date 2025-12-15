import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Services } from '../../services';

@Component({
  selector: 'app-product',
  imports: [RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  //  repeat = Array.from({length:5});
  products: any[] = [];
  // /api service inte object declare cheythu
  constructor(private services: Services, private cdr: ChangeDetectorRef) { }
  ngOnInit() {
    this.services.getProducts().subscribe((data: any) => {
      this.products = data.products;
      this.cdr.markForCheck(); // Ensure view updates
    });
  }
}
