import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ColorSwatchComponent } from './color-swatch.component';

describe('ColorSwatchComponent', () => {
  let component: ColorSwatchComponent;
  let fixture: ComponentFixture<ColorSwatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorSwatchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorSwatchComponent);
    component = fixture.componentInstance;
    component.color = 'rgb(0, 0, 0)';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('[dom tests]', () => {
    it('should display swatch with correct color', () => {
      const colorSwatchDe = fixture.debugElement.query(By.css('.color-swatch'));
      const colorSwatchEl = colorSwatchDe.nativeElement as HTMLElement;
      expect(colorSwatchEl.getAttribute('style')).toContain(
        `background-color: ${component.color}`
      );
    });
  });
});
