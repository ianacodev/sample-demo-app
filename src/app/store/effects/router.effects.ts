import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { tap } from 'rxjs/operators';
// ngrx
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as fromActions from '../actions';

@Injectable()
export class RouterEffects {
  constructor(
    private router: Router,
    private location: Location,
    private actions$: Actions
  ) {}

  navigate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.go),
        tap(({ path, query: queryParams, extras }) =>
          this.router.navigate(path, { queryParams, ...extras })
        )
      ),
    {
      dispatch: false,
    }
  );

  navigateBack$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.back),
      tap(() => this.location.back)
    )
  );

  navigateForward$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.forward),
      tap(() => this.location.forward)
    )
  );
}
