import { Component, Input } from '@angular/core';
// models
import { ProductDetails } from '../../models';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  @Input() productDetails: ProductDetails | undefined;
}
