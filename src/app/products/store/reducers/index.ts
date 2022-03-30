// ngrx
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromProductsReducer from './products.reducer';

export const featureKey = 'products';

export interface ProductsState {
  [fromProductsReducer.productsStateKey]: fromProductsReducer.ProductsState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  [fromProductsReducer.productsStateKey]: fromProductsReducer.productsReducer,
};

// feature selector
export const selectProductsFeatureState =
  createFeatureSelector<ProductsState>(featureKey);
