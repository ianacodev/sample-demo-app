import { HttpErrorResponse } from '@angular/common/http';
// ngrx
import { createAction, props } from '@ngrx/store';
// models
import { Product } from '../../models';

export enum ProductsActionTypes {
  LoadProducts = '[Products] Load Products',
  LoadProductsSuccess = '[Products] Load Products Success',
  LoadProductsFail = '[Products] Load Products Fail',
  AddProduct = '[Products] Add Product',
  AddProductSuccess = '[Products] Add Product Success',
  AddProductFail = '[Products] Add Product Fail',
  ResetProducts = '[Products] Reset Products',
}

// load
export const loadProducts = createAction(ProductsActionTypes.LoadProducts);

export const loadProductsSuccess = createAction(
  ProductsActionTypes.LoadProductsSuccess,
  props<{ products: Required<Product>[] }>()
);

export const loadProductsFail = createAction(
  ProductsActionTypes.LoadProductsFail,
  props<{ error: HttpErrorResponse }>()
);

// add
export const addProduct = createAction(
  ProductsActionTypes.AddProduct,
  props<{ product: Product }>()
);

export const addProductSuccess = createAction(
  ProductsActionTypes.AddProductSuccess,
  props<{ product: Required<Product> }>()
);

export const addProductFail = createAction(
  ProductsActionTypes.AddProductFail,
  props<{ error: HttpErrorResponse }>()
);

export const resetProducts = createAction(ProductsActionTypes.ResetProducts);
