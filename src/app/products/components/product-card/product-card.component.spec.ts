import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { ProductCardComponent } from './product-card.component';
// test
import * as fromProductsTest from '../../test';
import * as fromSharedTest from '../../../shared/test';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProductCardComponent,
        fromSharedTest.ColorSwatchComponentStub,
        fromSharedTest.SvgComponentStub,
      ],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    component.product = fromProductsTest.productsMock[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('[dom tests]', () => {
    it('should render product card', () => {
      const productCardDe = fixture.debugElement;
      const productCardLinkEl = productCardDe.query(
        By.css('.product-card__link')
      ).nativeElement as HTMLAnchorElement;
      const productCardImageEl = productCardDe.query(By.css('app-svg'))
        .nativeElement as HTMLElement;
      // content
      const productCardContentDe = productCardDe.query(
        By.css('.product-card__content')
      );
      const productCardTitleEl = productCardContentDe.query(
        By.css('.product-card__title')
      ).nativeElement as HTMLElement;
      const productCardSubtitleEl = productCardContentDe.query(
        By.css('.product-card__subtitle')
      ).nativeElement as HTMLElement;
      const productCardColorSwatchEl = productCardContentDe.query(
        By.css('app-color-swatch')
      ).nativeElement as HTMLElement;
      // assert
      const { product } = component;
      expect(productCardLinkEl.getAttribute('href')).toEqual(
        `/main/products/${product?.id}`
      );
      expect(productCardImageEl.getAttribute('ng-reflect-color')).toEqual(
        product?.color as string
      );
      expect(productCardTitleEl.textContent).toContain(product?.title);
      expect(productCardSubtitleEl.textContent).toContain(product?.subtitle);
      expect(productCardColorSwatchEl.getAttribute('ng-reflect-color')).toEqual(
        product?.color as string
      );
    });
  });
});
