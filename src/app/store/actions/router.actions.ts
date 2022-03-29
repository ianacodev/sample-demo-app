import { createAction, props } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export enum RouterActionTypes {
  Go = '[Router] Go',
  Back = '[Router] Back',
  Forward = '[Router] Forward',
}

export const go = createAction(
  RouterActionTypes.Go,
  props<{ path: any[]; query?: object; extras?: NavigationExtras }>()
);

export const back = createAction(RouterActionTypes.Back);

export const forward = createAction(RouterActionTypes.Forward);
