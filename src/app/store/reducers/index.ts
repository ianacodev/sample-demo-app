// ngrx
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { RouterStateUrl, routerFeatureKey } from './custom-route-serializer';
// exports
export { CustomSerializer } from './custom-route-serializer';

export interface State {
  [routerFeatureKey]: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  [routerFeatureKey]: routerReducer,
};

// feature selector
export const selectRouterFeatureState =
  createFeatureSelector<RouterReducerState<RouterStateUrl>>(routerFeatureKey);
