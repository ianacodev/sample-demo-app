// imports
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './product-item/product-item.component';
// exports
export * from './products/products.component';
export * from './product-item/product-item.component';
// exports group
export const containers = [ProductsComponent, ProductItemComponent];
