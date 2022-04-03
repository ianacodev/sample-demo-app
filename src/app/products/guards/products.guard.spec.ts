import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, Params } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, MemoizedSelector } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';
import { ProductsGuard } from './products.guard';
import * as fromStore from '../store';
import * as fromProductsReducer from '../store/reducers/products.reducer';

describe('ProductsGuard', () => {
  let guard: ProductsGuard;
  let router: Router;
  let store: MockStore<{ ids: string[] }>;
  let productIds: MemoizedSelector<fromProductsReducer.ProductsState, string[]>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [ProductsGuard, provideMockStore()],
    });
    store = TestBed.inject(Store) as MockStore<{ ids: string[] }>;
    router = TestBed.inject(Router);
    guard = TestBed.inject(ProductsGuard);
    productIds = store.overrideSelector(fromStore.selectProductIds, []);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('[class tests]', () => {
    it('should return url tree if product does not exist', () => {
      const expected = cold('(a|)', {
        a: router.createUrlTree(['main', 'products']),
      });
      const mockRouteSnapshot = { params: {} } as ActivatedRouteSnapshot;
      expect(guard.canActivate(mockRouteSnapshot)).toBeObservable(expected);
    });

    it('should return true if product does exist', () => {
      productIds.setResult(['AAA']);
      const expected = cold('(a|)', {
        a: true,
      });
      const mockRouteSnapshot = {
        params: { productId: 'AAA' } as Params,
      } as ActivatedRouteSnapshot;
      expect(guard.canActivate(mockRouteSnapshot)).toBeObservable(expected);
    });
  });
});
