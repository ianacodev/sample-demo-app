import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { mergeMap, map, catchError, filter } from 'rxjs/operators';
// ngrx
import { Store, select } from '@ngrx/store';
import { createEffect, Actions, ofType, concatLatestFrom } from '@ngrx/effects';
import { ProductsState } from '../reducers';
import * as fromActions from '../actions';
import * as fromSelectors from '../selectors';
import * as fromRootStore from '../../../store';
// services
import { ProductsService } from '../../services/products.service';
// models
import { Product } from '../../models';

@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadProducts),
      concatLatestFrom(() =>
        this.store.pipe(select(fromSelectors.selectProductsLoaded))
      ),
      filter(([, loaded]) => !loaded),
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
          map((product) =>
            fromActions.addProductSuccess({
              product: product as Required<Product>,
            })
          ),
          catchError((error) => of(fromActions.addProductsFail({ error })))
        )
      )
    )
  );

  addProductSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.addProductSuccess),
      map(({ product }) =>
        fromRootStore.go({ path: ['main', 'products', product.id] })
      )
    )
  );

  constructor(
    private productsService: ProductsService,
    private actions$: Actions,
    private store: Store<ProductsState>
  ) {}
}
