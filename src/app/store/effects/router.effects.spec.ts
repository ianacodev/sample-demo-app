import { TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Actions } from '@ngrx/effects';
import * as fromActions from '../actions';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { RouterEffects } from './router.effects';
import { TestHotObservable } from 'jasmine-marbles/src/test-observables';

describe('Router Effects', () => {
  let effects: RouterEffects;
  let mockStore: MockStore;
  let actions$: Observable<any>;
  let routerSpy: jasmine.SpyObj<Router>;
  let locationSpy: jasmine.SpyObj<Location>;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('router', ['navigate']);
    locationSpy = jasmine.createSpyObj('location', ['back', 'forward']);
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        RouterEffects,
        provideMockStore(),
        provideMockActions(() => actions$),
        {
          provide: Router,
          useValue: routerSpy,
        },
        {
          provide: Location,
          useValue: locationSpy,
        },
      ],
    });
    effects = TestBed.inject(RouterEffects);
    mockStore = TestBed.inject(MockStore);
    actions$ = TestBed.inject(Actions);
  });

  it('should create', () => {
    expect(effects).toBeTruthy();
  });

  describe('navigate$', () => {
    it('should router navigate', () => {
      const mockNav = {
        path: ['test'],
        query: { id: 'ab12' },
        extras: {},
      };
      const action = fromActions.go(mockNav);
      actions$ = hot('-a', { a: action });
      const { path, query: queryParams, extras } = mockNav;
      expect(effects.navigate$).toBeObservable(actions$ as TestHotObservable);
      expect(routerSpy.navigate).toHaveBeenCalledWith(path, {
        queryParams,
        ...extras,
      });
    });
  });

  describe('navigateBack$', () => {
    it('should navigate back', () => {
      const action = fromActions.back();
      actions$ = hot('-a', { a: action });
      expect(effects.navigateBack$).toBeObservable(
        actions$ as TestHotObservable
      );
      expect(locationSpy.back).toHaveBeenCalled();
    });
  });

  describe('navigateForward$', () => {
    it('should navigate forward', () => {
      const action = fromActions.forward();
      actions$ = hot('-a', { a: action });
      expect(effects.navigateForward$).toBeObservable(
        actions$ as TestHotObservable
      );
      expect(locationSpy.forward).toHaveBeenCalled();
    });
  });
});
