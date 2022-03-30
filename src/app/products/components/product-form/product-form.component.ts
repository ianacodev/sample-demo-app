import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  FormControl,
} from '@angular/forms';
// models
import { Product, ProductStatusTypes } from './../../models';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnChanges {
  statusOptions: { key: string; value: string }[];
  form: FormGroup;
  @Input() product: Product | undefined;
  get detailItems() {
    return this.form.get('detailItems') as FormArray;
  }

  constructor(private fb: FormBuilder) {
    this.statusOptions = Object.entries(ProductStatusTypes).map(
      ([key, value]) => ({ key, value })
    );
    this.form = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(32),
        ],
      ],
      subtitle: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(32),
        ],
      ],
      status: ['', [Validators.required]],
      colorHex: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.maxLength(300)]],
      detailItems: this.fb.array([]),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { product } = changes;
    if (product) {
      console.log('product', product);
    }
  }

  createDetailItem(value: string = ''): FormControl {
    return this.fb.control(value, [Validators.maxLength(75)]);
  }

  /**
   * add detail
   */
  addDetailItem() {
    const control = this.createDetailItem();
    this.detailItems.push(control);
  }

  /**
   * remove detail
   */
  removeDetailItem(index: number) {
    this.detailItems.removeAt(index);
  }

  /**
   * on submit
   */
  onSubmit(): void {
    console.log('form value', this.form.value);
  }
}
