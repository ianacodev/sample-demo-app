import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// features
import { MainRoutingModule } from './main-routing.module';
// containers
import * as fromContainers from './containers';

@NgModule({
  declarations: [...fromContainers.containers],
  imports: [CommonModule, MainRoutingModule],
  exports: [...fromContainers.containers],
})
export class MainModule {}
