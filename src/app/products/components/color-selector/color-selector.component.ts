import {
  Component,
  Input,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
// models
import { Option } from '../../models';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ColorSelectorComponent,
    },
  ],
})
export class ColorSelectorComponent implements ControlValueAccessor {
  colorValue: string = '';
  onChange: Function = (color: string) => {};
  onTouched: Function = () => {};
  @Input() label: string = 'Color';
  @Input() colors: Option<string>[] = [];

  writeValue(colorValue: string): void {
    this.colorValue = colorValue;
  }

  registerOnChange(onChange: Function): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: Function): void {
    this.onTouched = onTouched;
  }

  onSelectColor(colorValue: string): void {
    this.colorValue = colorValue;
    this.onTouched();
    this.onChange(colorValue);
  }
}
