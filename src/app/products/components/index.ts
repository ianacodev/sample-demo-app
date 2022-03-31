// imports
import { ProductsHeaderComponent } from './products-header/products-header.component';
import { ProductsGridComponent } from './products-grid/products-grid.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ColorSelectorComponent } from './color-selector/color-selector.component';
// exports
export * from './products-header/products-header.component';
export * from './products-grid/products-grid.component';
export * from './product-card/product-card.component';
export * from './product-details/product-details.component';
export * from './product-form/product-form.component';
export * from './color-selector/color-selector.component';
// exports group
export const components = [
  ProductsHeaderComponent,
  ProductsGridComponent,
  ProductCardComponent,
  ProductDetailsComponent,
  ProductFormComponent,
  ColorSelectorComponent,
];
