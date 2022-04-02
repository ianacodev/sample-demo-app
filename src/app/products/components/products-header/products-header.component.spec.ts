import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ProductsHeaderComponent } from './products-header.component';

describe('ProductsHeaderComponent', () => {
  let component: ProductsHeaderComponent;
  let fixture: ComponentFixture<ProductsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('[class tests]', () => {
    it('should emit event on product add', () => {
      const { addProduct } = component;
      spyOn(addProduct, 'emit');
      component.onAddProduct();
      expect(addProduct.emit).toHaveBeenCalled();
    });
  });

  describe('[dom tests]', () => {
    it('should call product add on button click', () => {
      const productsHeaderDe = fixture.debugElement;
      const buttonEl = productsHeaderDe.query(
        By.css('.products-header__button')
      ).nativeElement as HTMLButtonElement;
      spyOn(component, 'onAddProduct');
      buttonEl.click();
      expect(component.onAddProduct).toHaveBeenCalled();
    });
  });
});
