import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.scss'],
})
export class ProductsHeaderComponent {
  @Output() addProduct = new EventEmitter();

  /**
   * on add product
   */
  onAddProduct(): void {
    this.addProduct.emit();
  }
}
