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
            fromActions.loadProductsSuccess({
              products: products as Required<Product>[],
            })
          ),
          catchError((error) => of(fromActions.loadProductsFail({ error })))
        )
      )
    )
  );

  addProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.addProduct),
      mergeMap(({ product }) =>
        this.productsService.addProduct(product).pipe(
          map(
            (product) =>
              fromActions.addProductSuccess({
                product: product as Required<Product>,
              }),
            catchError((error) => of(fromActions.addProductsFail({ error })))
          )
        )
      )
    )
  );

  constructor(
    private productsService: ProductsService,
    private actions$: Actions
  ) {}
}
