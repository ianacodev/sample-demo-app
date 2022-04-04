import { HttpErrorResponse } from '@angular/common/http';
import * as fromProductsReducer from './products.reducer';
import * as fromActions from '../actions';
// test
import * as fromProductsTest from '../../test';

describe('ProductsReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const { initialState } = fromProductsReducer;
      const action = {
        type: 'Unknown',
      };
      const state = fromProductsReducer.productsReducer(initialState, action);
      expect(state).toBe(initialState);
    });
  });

  describe('Load', () => {
    describe('loadProducts Action', () => {
      it('should return new state with loading true', () => {
        const { initialState } = fromProductsReducer;
        const expectedState = { ...initialState, loading: true };
        const action = fromActions.loadProducts();
        const state = fromProductsReducer.productsReducer(initialState, action);
        expect(state).toEqual(expectedState);
      });
    });

    describe('loadProductsSuccess Action', () => {
      it('should return the new state with ids/entities/loading false/loaded true', () => {
        const { initialState } = fromProductsReducer;
        const { productsMock: products } = fromProductsTest;
        const entities = products.reduce(
          (entities, product) => ({
            ...entities,
            [product.id]: product,
          }),
          {}
        );
        const ids = Object.keys(entities);
        const expectedState = { ...initialState, entities, ids, loaded: true };
        const action = fromActions.loadProductsSuccess({ products });
        const state = fromProductsReducer.productsReducer(initialState, action);
        expect(state).toEqual(expectedState);
        expect(state).not.toBe(expectedState);
      });
    });

    describe('loadProductsFail Action', () => {
      it('should return the new state with error', () => {
        const { initialState } = fromProductsReducer;
        const error = { error: {} } as HttpErrorResponse;
        const expectedState = { ...initialState, error: error.error };
        const action = fromActions.loadProductsFail({ error });
        const state = fromProductsReducer.productsReducer(initialState, action);
        expect(state).toEqual(expectedState);
        expect(state).not.toBe(expectedState);
      });
    });

    describe('addProductSuccess Action', () => {
      it('should return the new state with product', () => {
        const { initialState } = fromProductsReducer;
        const product = fromProductsTest.productsMock[0];
        const expectedState = {
          ...initialState,
          entities: { [product.id]: product },
          ids: [product.id],
        };
        const action = fromActions.addProductSuccess({ product });
        const state = fromProductsReducer.productsReducer(initialState, action);
        expect(state).toEqual(expectedState);
        expect(state).not.toBe(expectedState);
      });
    });

    describe('resetProduct Action', () => {
      it('should return the new state as initial', () => {
        const { initialState } = fromProductsReducer;
        const product = fromProductsTest.productsMock[0];
        const currentState = {
          ...initialState,
          entities: { [product.id]: product },
          ids: [product.id],
        };
        const action = fromActions.resetProducts();
        const state = fromProductsReducer.productsReducer(currentState, action);
        const expectedState = initialState;
        expect(state).toEqual(expectedState);
      });
    });
  });
});
