import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-swatch',
  template: '',
})
export class ColorSwatchStubComponent {
  @Input() color: string = '#DDDDDD';
}

@Component({
  selector: 'app-svg',
  template: '',
})
export class SvgStubComponent {
  colorFill: string = '#f5f5f5';
  @Input() color: string = '';
}

@Component({
  selector: 'app-loading',
  template: '',
})
export class LoadingStubComponent {
  @Input() diameter: number = 50;
}
