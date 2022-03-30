import { HttpErrorResponse } from '@angular/common/http';
// ngrx
import { createAction, props } from '@ngrx/store';
// models
import { Product } from '../../models';

export enum ProductsActionTypes {
  LoadProducts = '[Products] Load Products',
  LoadProductsSuccess = '[Products] Load Products Success',
  LoadProductsFail = '[Products] Load Products Fail',
  ResetProducts = '[Products] Reset Products',
}

export const loadProducts = createAction(ProductsActionTypes.LoadProducts);

export const loadProductsSuccess = createAction(
  ProductsActionTypes.LoadProductsSuccess,
  props<{ products: Product[] }>()
);

export const loadProductsFail = createAction(
  ProductsActionTypes.LoadProductsFail,
  props<{ error: HttpErrorResponse }>()
);

export const resetProducts = createAction(ProductsActionTypes.ResetProducts);
