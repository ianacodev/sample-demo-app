import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
// ngrx
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as fromActions from '../actions';
// services
import { ProductsService } from '../../services/products.service';
// models
import { Product } from '../../models';

@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadProducts),
      mergeMap(() =>
        this.productsService.getProducts().pipe(
          map((products) =>
            fromActions.loadProductsSuccess({ products: products as Product[] })
          ),
          catchError((error) => of(fromActions.loadProductsFail({ error })))
        )
      )
    )
  );

  constructor(
    private productsService: ProductsService,
    private actions$: Actions
  ) {}
}
