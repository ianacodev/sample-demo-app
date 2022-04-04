import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ProductFormComponent } from './product-form.component';
// test
import * as fromProductsTest from '../../test';

xdescribe('ProductFormComponent', () => {
  let component: ProductFormComponent;
  let fixture: ComponentFixture<ProductFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProductFormComponent,
        fromProductsTest.FormErrorStubPipe,
        fromProductsTest.ColorSelectorStubComponent,
      ],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
