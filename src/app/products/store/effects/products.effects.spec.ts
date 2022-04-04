import { HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { ProductsEffects } from './products.effects';
import * as fromActions from '../actions';
import * as fromSelectors from '../selectors';
// services
import { ProductsService } from '../../services/products.service';
// test
import * as fromProductsTest from '../../test';

describe('Products Effects', () => {
  let effects: ProductsEffects;
  let productsServiceSpy: jasmine.SpyObj<ProductsService>;
  let mockStore: MockStore;
  let actions$: Observable<any>;
  let products = fromProductsTest.productsMock;

  beforeEach(() => {
    const productsServiceMock = jasmine.createSpyObj('productsService', [
      'getProducts',
      'addProduct',
    ]);
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ProductsEffects,
        {
          provide: ProductsService,
          useValue: productsServiceMock,
        },
        provideMockStore(),
        provideMockActions(() => actions$),
      ],
    });
    effects = TestBed.inject(ProductsEffects);
    mockStore = TestBed.inject(MockStore);
    productsServiceSpy = TestBed.inject(
      ProductsService
    ) as jasmine.SpyObj<ProductsService>;
    actions$ = TestBed.inject(Actions);
  });

  it('should create', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadProducts$', () => {
    it('should return LoadProductsSuccess with products', () => {
      mockStore.overrideSelector(fromSelectors.selectProductsLoaded, false);
      const action = fromActions.loadProducts();
      const completion = fromActions.loadProductsSuccess({ products });
      actions$ = hot('-a', { a: action });
      const response = cold('-a|', { a: products });
      const expected = cold('--b', { b: completion });
      productsServiceSpy.getProducts.and.returnValue(response);
      expect(effects.loadProducts$).toBeObservable(expected);
    });

    it('should return LoadProductsFail with error', () => {
      mockStore.overrideSelector(fromSelectors.selectProductsLoaded, false);
      const error = {} as HttpErrorResponse;
      const action = fromActions.loadProducts();
      const completion = fromActions.loadProductsFail({ error });
      actions$ = hot('-a', { a: action });
      const response = cold('-#', {}, error);
      const expected = cold('--b', { b: completion });
      productsServiceSpy.getProducts.and.returnValue(response);
      expect(effects.loadProducts$).toBeObservable(expected);
    });

    it('should filter on already loaded', () => {
      mockStore.overrideSelector(fromSelectors.selectProductsLoaded, true);
      const action = fromActions.loadProducts();
      actions$ = hot('-a', { a: action });
      const expected = cold('--');
      expect(effects.loadProducts$).toBeObservable(expected);
      expect(productsServiceSpy.getProducts).not.toHaveBeenCalled();
    });

    it('should return AddProductSuccess with product', () => {
      const product = products[0];
      const action = fromActions.addProduct({ product });
      const completion = fromActions.addProductSuccess({ product });
      actions$ = hot('-a', { a: action });
      const response = cold('-a|', { a: product });
      const expected = cold('--b', { b: completion });
      productsServiceSpy.addProduct.and.returnValue(response);
      expect(effects.addProduct$).toBeObservable(expected);
      expect(productsServiceSpy.addProduct).toHaveBeenCalledWith(product);
    });

    it('should return addProductFail with error', () => {
      const product = products[0];
      const error = {} as HttpErrorResponse;
      const action = fromActions.addProduct({ product });
      const completion = fromActions.addProductFail({ error });
      actions$ = hot('-a', { a: action });
      const response = cold('-#', {}, error);
      const expected = cold('--b', { b: completion });
      productsServiceSpy.addProduct.and.returnValue(response);
      expect(effects.addProduct$).toBeObservable(expected);
      expect(productsServiceSpy.addProduct).toHaveBeenCalledWith(product);
    });
  });
});
