import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingComponent],
      imports: [MatProgressSpinnerModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('[dom tests]', () => {
    it('should render spinner with default diameter', () => {
      const spinnerDe = fixture.debugElement.query(By.css('.loading'));
      const spinnerEl = spinnerDe.nativeElement as HTMLElement;
      expect(
        parseInt(spinnerEl.getAttribute('ng-reflect-diameter') as string, 10)
      ).toEqual(component.diameter);
    });
  });
});
