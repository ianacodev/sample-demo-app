import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ProductsGridComponent } from './products-grid.component';
// models
import { Product } from '../../models';
// test
import * as fromProductsTest from '../../test';

describe('ProductsGridComponent', () => {
  let component: ProductsGridComponent;
  let fixture: ComponentFixture<ProductsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProductsGridComponent,
        fromProductsTest.ProductCardStubComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsGridComponent);
    component = fixture.componentInstance;
    component.products = fromProductsTest.productsMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('[dom tests]', () => {
    it('should render grid of products', () => {
      const productsGridDe = fixture.debugElement;
      const productCardDes = productsGridDe.queryAll(
        By.css('app-product-card')
      );
      const expected = (component.products as Product[]).length;
      expect(productCardDes.length).toBe(expected);
    });
  });
});
