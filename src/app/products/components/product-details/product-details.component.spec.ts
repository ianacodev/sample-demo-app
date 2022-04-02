import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ProductDetailsComponent } from './product-details.component';
// test
import * as fromProductsTest from '../../test';
import * as fromSharedTest from '../../../shared/test';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProductDetailsComponent,
        fromSharedTest.ColorSwatchComponentStub,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    component.product = fromProductsTest.productsMock[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('[dom tests]', () => {
    it('should render product details header', () => {
      const { product } = component;
      const productDetailsDe = fixture.debugElement;
      const productDetailsHeaderDe = productDetailsDe.query(
        By.css('.product-details__header')
      );
      const productDetailsTitleEl = productDetailsHeaderDe.query(
        By.css('.product-details__title')
      ).nativeElement as HTMLElement;
      const productDetailsSubtitleEl = productDetailsHeaderDe.query(
        By.css('.product-details__subtitle')
      ).nativeElement as HTMLElement;
      const colorSwatchEl = productDetailsHeaderDe.query(
        By.css('app-color-swatch')
      ).nativeElement as HTMLElement;
      const productDetailsStatusEl = productDetailsHeaderDe.query(
        By.css('.product-details__status')
      ).nativeElement as HTMLElement;
      expect(productDetailsTitleEl.textContent).toContain(product?.title);
      expect(productDetailsSubtitleEl.textContent).toContain(product?.subtitle);
      expect(colorSwatchEl.getAttribute('ng-reflect-color')).toEqual(
        product?.color as string
      );
      expect(productDetailsStatusEl.textContent).toContain(product?.status);
    });

    it('should render product details description section', () => {
      const { product } = component;
      const productDetailsDe = fixture.debugElement;
      const productDetailsDescriptionDe = productDetailsDe.query(
        By.css('.product-details__description')
      );
      const productDetailsDescriptionTextEl = productDetailsDescriptionDe.query(
        By.css('.product-details__text')
      ).nativeElement as HTMLElement;
      expect(productDetailsDescriptionTextEl.textContent).toEqual(
        product?.description as string
      );
    });

    it('should render product details details section', () => {
      const { product } = component;
      const productDetailsDe = fixture.debugElement;
      const productDetailsDetailsDe = productDetailsDe.query(
        By.css('.product-details__details')
      );
      const productDetailsDetailsItemDes = productDetailsDetailsDe.queryAll(
        By.css('.product-details__details-item')
      );
      productDetailsDetailsItemDes.forEach((detailsItemDe, index) => {
        const detailsItemEl = detailsItemDe.nativeElement as HTMLElement;
        const expected = product?.details[index];
        expect(detailsItemEl.textContent).toContain(expected);
      });
    });
  });
});
