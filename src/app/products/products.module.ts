import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
// ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { featureKey, reducers, effects } from './store';
// features
import { ProductsRoutingModule } from './products-routing.module';
// containers
import * as fromContainers from './containers';
// components
import * as fromComponents from './components';

@NgModule({
  declarations: [...fromContainers.containers, ...fromComponents.components],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductsRoutingModule,
    StoreModule.forFeature(featureKey, reducers),
    EffectsModule.forFeature(effects),
    MatButtonModule,
    FlexLayoutModule,
  ],
})
export class ProductsModule {}
