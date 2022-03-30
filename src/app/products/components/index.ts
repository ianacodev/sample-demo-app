// imports
import { ProductsHeaderComponent } from './products-header/products-header.component';
import { ProductsGridComponent } from './products-grid/products-grid.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ColorSwatchComponent } from './color-swatch/color-swatch.component';
import { SvgComponent } from './svg/svg.component';
// exports
export * from './products-header/products-header.component';
export * from './products-grid/products-grid.component';
export * from './product-card/product-card.component';
export * from './color-swatch/color-swatch.component';
export * from './svg/svg.component';
// exports group
export const components: any[] = [
  ProductsHeaderComponent,
  ProductsGridComponent,
  ProductCardComponent,
  ColorSwatchComponent,
  SvgComponent
];
