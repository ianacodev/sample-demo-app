import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  FormControl,
} from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
// models
import {
  Product,
  ProductStatusTypes,
  ProductColorTypes,
  Option,
} from './../../models';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnChanges, OnInit, OnDestroy {
  form: FormGroup;
  options: { [key: string]: Option<string>[] } = {};
  ngUnsubscribe$ = new Subject<void>();
  @Input() product: Product | undefined;
  @Output() colorSelect = new EventEmitter<string>();
  @Output() submitEvent = new EventEmitter<Product>();
  get details() {
    return this.form.get('details') as FormArray;
  }

  constructor(private fb: FormBuilder) {
    this.setOptions();
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
      color: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.maxLength(300)]],
      details: this.fb.array([]),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { product } = changes;
    if (product) {
    }
  }

  ngOnInit(): void {
    this.form
      .get('color')
      ?.valueChanges.pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((color) => this.colorSelect.emit(color));
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

  setOptions(): void {
    this.options = [
      { key: 'statuses', types: ProductStatusTypes },
      { key: 'colors', types: ProductColorTypes },
    ].reduce((options, obj) => {
      const { key, types } = obj;
      const value = Object.entries(types).map(([key, value]) => ({
        key,
        value,
      }));
      return { ...options, [key]: value };
    }, {});
  }

  createDetail(value: string = ''): FormControl {
    return this.fb.control(value, [Validators.maxLength(75)]);
  }

  /**
   * add detail
   */
  addDetail() {
    const control = this.createDetail();
    this.details.push(control);
  }

  /**
   * remove detail
   */
  removeDetail(index: number) {
    this.details.removeAt(index);
  }

  /**
   * on submit
   */
  onSubmit(): void {
    const { value, valid } = this.form;
    this.submitEvent.emit(value);
  }
}
