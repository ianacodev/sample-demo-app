import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.svg',
  styleUrls: ['./svg.component.scss'],
})
export class SvgComponent {
  @Input() color: string = '#DDDDDD';
}
