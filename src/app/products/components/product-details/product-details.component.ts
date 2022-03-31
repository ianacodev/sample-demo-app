import { Component, Input } from '@angular/core';
// models
import { Product } from '../../models';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  @Input() product: Product | undefined;
}
