import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ProductsComponent } from './products.component';
import * as fromStore from '../../store';
import { cold } from 'jasmine-marbles';
import { By } from '@angular/platform-browser';
// test
import * as fromProductsTest from '../../test';
import * as fromSharedTest from '../../../shared/test';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProductsComponent,
        fromProductsTest.ProductsHeaderStubComponent,
        fromProductsTest.ProductsGridStubComponent,
        fromSharedTest.LoadingStubComponent,
      ],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('[class tests]', () => {
    it('should dispatch a products load on init', () => {
      const action = fromStore.loadProducts();
      expect(store.dispatch).toHaveBeenCalledWith(action);
    });

    it('should return products', () => {
      store.overrideSelector(
        fromStore.selectProducts,
        fromProductsTest.productsMock
      );
      const expected = cold('a', { a: fromProductsTest.productsMock });
      expect(component.products$).toBeObservable(expected);
    });
  });
});
