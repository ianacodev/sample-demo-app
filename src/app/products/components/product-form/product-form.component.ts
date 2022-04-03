import {
  Component,
  OnInit,
  OnDestroy,
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
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
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
export class ProductFormComponent implements OnInit, OnDestroy {
  readonly FIELD_MAX_LIMITS = {
    details: 4,
    title: 32,
    subtitle: 32,
    description: 300,
    detail: 75,
  };
  form: FormGroup;
  options: { [key: string]: Option<string>[] } = {};
  ngUnsubscribe$ = new Subject<void>();
  @Input() product: Product | undefined;
  @Output() colorSelect = new EventEmitter<string>();
  @Output() submitEvent = new EventEmitter<Product>();
  get details() {
    return this.form.get('details') as FormArray;
  }

  // custom validator
  maxDetailsValidator = (max: number): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
      const valueLength = control.value.length;
      return valueLength > max
        ? {
            maxDetails: {
              requiredLength: max,
              actualLength: valueLength,
            },
          }
        : null;
    };
  };

  constructor(private fb: FormBuilder) {
    this.setOptions();
    this.form = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(this.FIELD_MAX_LIMITS.title),
        ],
      ],
      subtitle: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(this.FIELD_MAX_LIMITS.subtitle),
        ],
      ],
      status: ['', [Validators.required]],
      color: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.maxLength(300)]],
      details: this.fb.array(
        [],
        [this.maxDetailsValidator(this.FIELD_MAX_LIMITS.details)]
      ),
    });
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
    return this.fb.control(value, [
      Validators.required,
      Validators.maxLength(this.FIELD_MAX_LIMITS.detail),
    ]);
  }

  /**
   * add detail
   */
  addDetail() {
    if (this.details.value.length < this.FIELD_MAX_LIMITS.details) {
      const control = this.createDetail();
      this.details.push(control);
    }
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
    this.form.markAllAsTouched();
    if (valid) {
      this.submitEvent.emit(value);
    }
  }
}
