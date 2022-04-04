import { Component, Input, Output, EventEmitter, Pipe } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

// models
import { Product, Option } from '../../models';

@Component({
  selector: 'app-product-card',
  template: '',
})
export class ProductCardStubComponent {
  @Input() product: Product | undefined;
}

@Component({
  selector: 'app-products-header',
  template: '',
})
export class ProductsHeaderStubComponent {
  @Output() addProduct = new EventEmitter();
}

@Component({
  selector: 'app-products-grid',
  template: '',
})
export class ProductsGridStubComponent {
  @Input() products: Product[] | null = [];
}

@Component({
  selector: 'app-product-form',
  template: '',
})
export class ProductFormStubComponent {
  @Input() product: Product | undefined;
  @Output() colorSelect = new EventEmitter<string>();
  @Output() submitEvent = new EventEmitter<Product>();
}

@Component({
  selector: 'app-product-details',
  template: '',
})
export class ProductDetailsStubComponent {
  @Input() product: Product | undefined;
}

@Component({
  selector: 'app-color-selector',
  template: '',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ColorSelectorStubComponent,
    },
  ],
})
export class ColorSelectorStubComponent implements ControlValueAccessor {
  @Input() label: string = 'Color';
  @Input() colors: Option<string>[] = [];
  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
}

@Pipe({
  name: 'formError',
})
export class FormErrorStubPipe {}
