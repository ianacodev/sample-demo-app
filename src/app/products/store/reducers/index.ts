// ngrx
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromProductsReducer from './products.reducer';

export const featureKey = 'products';

export interface ProductsState {
  [fromProductsReducer.productsFeatureKey]: fromProductsReducer.ProductsState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  [fromProductsReducer.productsFeatureKey]: fromProductsReducer.productsReducer,
};

// feature selector
export const selectProductsFeatureState =
  createFeatureSelector<ProductsState>(featureKey);
