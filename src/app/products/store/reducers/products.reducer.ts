import { HttpErrorResponse } from '@angular/common/http';
// ngrx
import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import * as fromActions from '../actions';
// models
import { Product } from '../../models';

export const productsStateKey = 'products';

export interface ProductsState extends EntityState<Product> {
  loading: boolean;
  loaded: boolean;
  error: any;
}

export function selectProductId(product: Product) {
  return product.id;
}

export const productsAdapter = createEntityAdapter({
  selectId: selectProductId,
});

export const initialState = productsAdapter.getInitialState({
  loading: false,
  loaded: false,
  error: null,
});

export const productsReducer = createReducer(
  initialState,
  on(fromActions.loadProducts, (state, action) => ({
    ...state,
    loading: true,
  })),
  on(fromActions.loadProductsSuccess, (state, action) => ({
    ...productsAdapter.setAll(action.products, state),
    loading: false,
    loaded: true,
    error: null,
  })),
  on(fromActions.loadProductsFail, (state, action) => {
    const { error: errorRes } = action;
    return { ...state, loading: false, loaded: false, error: errorRes.error };
  }),
  on(fromActions.resetProducts, () => initialState)
);

// helpers
const { selectAll, selectEntities, selectIds } = productsAdapter.getSelectors();

export const selectProductsLoading = (state: ProductsState) => state.loading;
export const selectProductsLoaded = (state: ProductsState) => state.loaded;
export const selectProductsError = (state: ProductsState) => state.error;
export const selectProductIds = (state: ProductsState) => state.ids as string[];
export const selectAllProducts = selectAll;
export const selectProductEntities = selectEntities;
