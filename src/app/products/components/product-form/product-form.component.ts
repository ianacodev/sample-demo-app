import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  UntypedFormArray,
  Validators,
  UntypedFormControl,
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFormComponent implements OnInit, OnDestroy {
  readonly FIELD_MAX_LIMITS = {
    details: 4,
    title: 32,
    subtitle: 32,
    description: 300,
    detail: 75,
  };
  form: UntypedFormGroup;
  options: { [key: string]: Option<string>[] } = {};
  ngUnsubscribe$ = new Subject<void>();
  @Input() product: Product | undefined;
  @Output() colorSelect = new EventEmitter<string>();
  @Output() submitEvent = new EventEmitter<Product>();
  get details() {
    return this.form.get('details') as UntypedFormArray;
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

  constructor(private fb: UntypedFormBuilder) {
    this.options = this.getOptions();
    const defaultColor = this.options['colors'][0];
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
      color: [defaultColor.value, [Validators.required]],
      description: ['', [Validators.required, Validators.maxLength(300)]],
      details: this.fb.array(
        [],
        [this.maxDetailsValidator(this.FIELD_MAX_LIMITS.details)]
      ),
    });
  }

  ngOnInit(): void {
    const colorControl = this.form.get('color') as AbstractControl;
    colorControl.valueChanges
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((color) => this.colorSelect.emit(color));
    // emit any defaulted color from form initialize
    this.colorSelect.emit(colorControl.value);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

  getOptions(): { [key: string]: Option<string>[] } {
    const options = [
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
    return options;
  }

  createDetail(value: string = ''): UntypedFormControl {
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
