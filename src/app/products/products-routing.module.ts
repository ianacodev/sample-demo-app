import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// containers
import * as fromContainers from './containers';

// routes
export const productsRoutes: Routes = [
  {
    path: '',
    component: fromContainers.ProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(productsRoutes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
