import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import * as fromContainers from './containers';

// routes
export const mainRoutes: Routes = [
  {
    path: '',
    component: fromContainers.MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
      },
      {
        path: 'products',
        loadChildren: () =>
          import('../products/products.module').then((m) => m.ProductsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
