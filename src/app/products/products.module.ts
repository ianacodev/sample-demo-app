import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
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
// pipes
import * as fromPipes from './pipes';

@NgModule({
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components,
    ...fromPipes.pipes,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    StoreModule.forFeature(featureKey, reducers),
    EffectsModule.forFeature(effects),
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
})
export class ProductsModule {}
