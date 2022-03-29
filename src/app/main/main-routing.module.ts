import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// routes
export const mainRoutes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
