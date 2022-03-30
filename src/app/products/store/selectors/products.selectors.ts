// ngrx
import { createSelector } from '@ngrx/store';
import * as fromReducers from '../reducers';
import * as fromProductsReducer from '../reducers/products.reducer';

export const selectProductsState = createSelector(
  fromReducers.selectProductsFeatureState,
  (state) => state.products
);

// loading
export const selectProductsLoading = createSelector(
  selectProductsState,
  fromProductsReducer.selectProductsLoading
);

// loaded
export const selectProductsLoaded = createSelector(
  selectProductsState,
  fromProductsReducer.selectProductsLoaded
);

// entities
export const selectProductEntities = createSelector(
  selectProductsState,
  fromProductsReducer.selectProductEntities
);

// products
export const selectProducts = createSelector(
  selectProductsState,
  fromProductsReducer.selectAllProducts
);

// ids
export const selectProductIds = createSelector(
  selectProductsState,
  fromProductsReducer.selectProductIds
);

// error
export const selectProductsError = createSelector(
  selectProductsState,
  fromProductsReducer.selectProductsError
);
