import { HttpErrorResponse } from '@angular/common/http';
import * as fromActions from './products.actions';
// test
import * as fromProductsTest from '../../test';

describe('Products Actions', () => {
  let products = fromProductsTest.productsMock;

  describe('Load Actions', () => {
    describe('LoadProducts', () => {
      it('should create an action', () => {
        const expectedAction = {
          type: fromActions.ProductsActionTypes.LoadProducts as any,
        };
        expect(fromActions.loadProducts()).toEqual(expectedAction);
      });
    });

    describe('LoadProductsSuccess', () => {
      it('should create an action', () => {
        const expectedAction = {
          type: fromActions.ProductsActionTypes.LoadProductsSuccess as any,
          products,
        };
        expect(
          fromActions.loadProductsSuccess({
            products,
          })
        ).toEqual(expectedAction);
      });
    });

    describe('LoadProductsFail', () => {
      it('should create an action', () => {
        const error = {} as HttpErrorResponse;
        const expectedAction = {
          type: fromActions.ProductsActionTypes.LoadProductsFail as any,
          error,
        };
        expect(fromActions.loadProductsFail({ error })).toEqual(expectedAction);
      });
    });
  });

  describe('Add Actions', () => {
    describe('AddProduct', () => {
      it('should create an action', () => {
        const product = products[0];
        const expectedAction = {
          type: fromActions.ProductsActionTypes.AddProduct as any,
          product,
        };
        expect(fromActions.addProduct({ product })).toEqual(expectedAction);
      });
    });

    describe('AddProductsSuccess', () => {
      it('should create an action', () => {
        const product = products[0];
        const expectedAction = {
          type: fromActions.ProductsActionTypes.AddProductSuccess as any,
          product,
        };
        expect(
          fromActions.addProductSuccess({
            product,
          })
        ).toEqual(expectedAction);
      });
    });

    describe('AddProductsFail', () => {
      it('should create an action', () => {
        const error = {} as HttpErrorResponse;
        const expectedAction = {
          type: fromActions.ProductsActionTypes.AddProductFail as any,
          error,
        };
        expect(fromActions.addProductFail({ error })).toEqual(expectedAction);
      });
    });
  });
});
