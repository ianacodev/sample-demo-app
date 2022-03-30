// ngrx
import { createSelector } from '@ngrx/store';
import * as fromReducers from '../reducers';
import * as fromRouterReducer from '../reducers/custom-route-serializer';

export const selectRouterState = createSelector(
  fromReducers.selectRouterFeatureState,
  (state) => state.state
);

export const selectRouterParams = createSelector(
  selectRouterState,
  fromRouterReducer.selectRouterParams
);

export const selectRouterParam = (paramKey: string) =>
  createSelector(selectRouterParams, (params) => params && params[paramKey]);

export const selectRouterQueryParams = createSelector(
  selectRouterState,
  fromRouterReducer.selectRouterQueryParams
);

export const selectRouterQueryParam = (paramKey: string) =>
  createSelector(
    selectRouterQueryParams,
    (queryParams) => queryParams && queryParams[paramKey]
  );
