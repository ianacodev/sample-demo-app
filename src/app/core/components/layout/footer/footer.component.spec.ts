import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let copyrightContent: string;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    copyrightContent = '© 2022 Ianacodev';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('[class tests]', () => {
    it(`should have as copyright '${copyrightContent}'`, () => {
      expect(component.copyright).toBe(copyrightContent);
    });
  });

  describe('[dom tests]', () => {
    it('should render copyright', () => {
      const footerDe = fixture.debugElement;
      const copyrightEl = footerDe.query(By.css('.footer__copyright'))
        ?.nativeElement as HTMLElement;
      expect(copyrightEl.textContent).toContain(copyrightContent);
    });
  });
});
