import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.svg',
  styleUrls: ['./svg.component.scss'],
})
export class SvgComponent {
  colorFill: string = '#f5f5f5';
  @Input() set color(value: string | undefined) {
    if (value) {
      this.colorFill = value;
    }
  }
}
