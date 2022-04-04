import { cold } from 'jasmine-marbles';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductItemComponent } from './product-item.component';
import * as fromStore from '../../store';
import * as fromRootStore from '../../../store';
// test
import * as fromProductsTest from '../../test';
import * as fromSharedTest from '../../../shared/test';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProductItemComponent,
        fromProductsTest.ProductFormStubComponent,
        fromProductsTest.ProductDetailsStubComponent,
        fromSharedTest.SvgStubComponent,
      ],
      imports: [BrowserAnimationsModule],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('[class tests]', () => {
    it('should provide selected product', () => {
      const product = fromProductsTest.productsMock[0];
      store.overrideSelector(fromStore.selectProductByRouteParam, product);
      const expected = cold('a', { a: product });
      expect(component.product$).toBeObservable(expected);
    });

    it('should dispatch back route to products', () => {
      component.onBack();
      const expected = fromRootStore.go({
        path: ['main', 'products'],
      });
      expect(store.dispatch).toHaveBeenCalledWith(expected);
    });

    it('should dispatch add product on submit', () => {
      const product = fromProductsTest.productsMock[0];
      component.onSubmit(product);
      const expected = fromStore.addProduct({ product });
      expect(store.dispatch).toHaveBeenCalledWith(expected);
    });
  });

  describe('[dom tests]', () => {
    it('should trigger on back for button click', () => {
      const buttonDe = fixture.debugElement.query(
        By.css('.product-item__button-back')
      );
      const buttonEl = buttonDe.nativeElement as HTMLButtonElement;
      spyOn(component, 'onBack');
      buttonEl.click();
      expect(component.onBack).toHaveBeenCalled();
    });

    it('should display product details and not form', () => {
      const product = fromProductsTest.productsMock[0];
      store.overrideSelector(fromStore.selectProductByRouteParam, product);
      store.refreshState();
      fixture.detectChanges();
      const productContentDe = fixture.debugElement.query(
        By.css('.product-item__content')
      );
      const productDetailsEl = productContentDe.query(
        By.css('app-product-details')
      )?.nativeElement;
      const productFormEl = productContentDe.query(
        By.css('app-product-form')
      )?.nativeElement;
      expect(productDetailsEl).toBeDefined();
      expect(productFormEl).toBeUndefined();
    });

    it('should display product form and not details', () => {
      store.overrideSelector(fromStore.selectProductByRouteParam, undefined);
      store.refreshState();
      fixture.detectChanges();
      const productContentDe = fixture.debugElement.query(
        By.css('.product-item__content')
      );
      const productDetailsEl = productContentDe.query(
        By.css('app-product-details')
      )?.nativeElement;
      const productFormEl = productContentDe.query(
        By.css('app-product-form')
      )?.nativeElement;
      expect(productDetailsEl).toBeUndefined();
      expect(productFormEl).toBeDefined();
    });
  });
});
