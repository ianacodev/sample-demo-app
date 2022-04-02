import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ColorSelectorComponent } from './color-selector.component';
// test
import * as fromSharedTest from '../../../shared/test';
// const
const testColors = [
  { key: 'C1', value: '#AAAAAA' },
  { key: 'C2', value: '#BBBBBB' },
  { key: 'C3', value: '#CCCCCC' },
];
@Component({
  template: `<app-color-selector
    [label]="'Color'"
    [colors]="testColors"
    [formControl]="color"
    #test
  ></app-color-selector>`,
})
class TestHostComponent {
  @ViewChild(ColorSelectorComponent, { static: true })
  colorSelectorComponent: ColorSelectorComponent | undefined;
  testColors = testColors;
  color = new FormControl('');
}

describe('ColorSelectorComponent', () => {
  let hostFixture: ComponentFixture<TestHostComponent>;
  let testHostComponent: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ColorSelectorComponent,
        TestHostComponent,
        fromSharedTest.ColorSwatchComponentStub,
      ],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    hostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = hostFixture.componentInstance;
    hostFixture.detectChanges();
  });

  it('should create', () => {
    expect(testHostComponent.colorSelectorComponent).toBeTruthy();
  });

  describe('[class tests]', () => {
    it('should set control value', () => {
      const color = testColors[0].value;
      testHostComponent.color.patchValue(color);
      expect(testHostComponent.colorSelectorComponent?.colorValue).toEqual(
        color
      );
    });

    it('should trigger change and touched on color select', () => {
      const color = testColors[0].value;
      const component =
        testHostComponent.colorSelectorComponent as ColorSelectorComponent;
      spyOn(component, 'onChange').and.callThrough();
      spyOn(component, 'onTouched').and.callThrough();
      component?.onSelectColor(color);
      expect(component.onChange).toHaveBeenCalled();
      expect(component.onTouched).toHaveBeenCalled();
      expect(component?.colorValue).toEqual(color);
    });
  });

  describe('[dom tests]', () => {
    it('should call select color on swatch click', () => {
      const component =
        testHostComponent.colorSelectorComponent as ColorSelectorComponent;
      let hostDe = hostFixture.debugElement;
      let colorSwatchDes = hostDe.queryAll(By.css('app-color-swatch'));
      const selectIndex = 1;
      const colorSwatchEl = colorSwatchDes[selectIndex]
        .nativeElement as HTMLElement;
      spyOn(component, 'onSelectColor');
      colorSwatchEl.click();
      expect(component.onSelectColor).toHaveBeenCalledWith(
        testColors[selectIndex].value
      );
    });
  });
});
