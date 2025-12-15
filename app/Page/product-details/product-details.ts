import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Services } from '../../services';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-product-details',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-details.html',
    styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
    product: any = null;
    loading: boolean = true;
    purchaseMessage: string = '';

    constructor(
        private route: ActivatedRoute,
        private services: Services,
        private cdr: ChangeDetectorRef
    ) { }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.services.getSingleProduct(id).subscribe({
                next: (data: any) => {
                    this.product = data;
                    this.loading = false;
                    this.cdr.markForCheck();
                },
                error: (err) => {
                    console.error('Error fetching product:', err);
                    this.loading = false;
                    this.cdr.markForCheck();
                }
            });
        } else {
            this.loading = false;
        }
    }

    buyProduct() {
        this.purchaseMessage = 'Thanks for purchasing!';
        setTimeout(() => {
            this.purchaseMessage = '';
        }, 3000);
    }
}
