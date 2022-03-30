import { Component, Input } from '@angular/core';
// models
import { Product } from '../../models';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss'],
})
export class ProductsGridComponent {
  @Input() products: Product[] | null = [];
}
