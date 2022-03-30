import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// containers
import * as fromContainers from './containers';
// guards
import * as fromGuards from './guards';

// routes
export const productsRoutes: Routes = [
  {
    path: '',
    component: fromContainers.ProductsComponent,
  },
  {
    path: ':productId',
    component: fromContainers.ProductItemComponent,
    canActivate: [fromGuards.ProductsGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(productsRoutes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
