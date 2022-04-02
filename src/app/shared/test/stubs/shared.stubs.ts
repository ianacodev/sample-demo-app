import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-swatch',
  template: '',
})
export class ColorSwatchComponentStub {
  @Input() color: string = '#DDDDDD';
}

@Component({
  selector: 'app-svg',
  template: '',
})
export class SvgComponentStub {
  colorFill: string = '#f5f5f5';
  @Input() color: string = '';
}
