import { Component, Input } from '@angular/core';
// models
import { Product } from '../../models';
// animations
import { slideUpAnimation } from 'src/app/shared/animations';
@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss'],
  animations: [slideUpAnimation],
})
export class ProductsGridComponent {
  @Input() products: Product[] | null = [];
}
