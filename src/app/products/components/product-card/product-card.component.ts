import { Component, Input } from '@angular/core';
// models
import { Product } from '../../models';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product: Product | undefined;
}
