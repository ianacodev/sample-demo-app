import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-swatch',
  templateUrl: './color-swatch.component.html',
  styleUrls: ['./color-swatch.component.scss'],
})
export class ColorSwatchComponent {
  @Input() color: string = '#DDDDDD';
}
