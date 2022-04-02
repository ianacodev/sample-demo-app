import { Component, Input } from '@angular/core';
// models
import { Product } from '../../models';

@Component({
  selector: 'app-product-card',
  template: '',
})
export class ProductCardComponentStub {
  @Input() product: Product | undefined;
}
