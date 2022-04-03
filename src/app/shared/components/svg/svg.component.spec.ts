import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SvgComponent } from './svg.component';

describe('SvgComponent', () => {
  let component: SvgComponent;
  let fixture: ComponentFixture<SvgComponent>;
  let testColor = '#AAAAAA';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgComponent);
    component = fixture.componentInstance;
    component.color = testColor;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('[class tests]', () => {
    it('should set fill color', () => {
      expect(component.colorFill).toBe(testColor);
    });
  });

  describe('[dom tests]', () => {
    it('should display svg with fill color', () => {
      const svgDe = fixture.debugElement.query(By.css('svg'));
      const svgEl = svgDe.nativeElement as SVGElement;
      expect(svgEl.getAttribute('fill')).toBe(component.colorFill);
    });
  });
});
