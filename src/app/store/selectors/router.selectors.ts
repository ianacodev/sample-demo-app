// ngrx
import { createSelector } from '@ngrx/store';
import * as fromReducers from '../reducers';
import * as fromRouterReducer from '../reducers/custom-route-serializer';

export const selectRouterState = createSelector(
  fromReducers.selectRouterFeatureState,
  (state) => state.state
);

export const selectRouterQueryParams = createSelector(
  selectRouterState,
  fromRouterReducer.selectRouterQueryParams
);

export const selectRouterQueryParam = (paramKey: string) =>
  createSelector(
    selectRouterState,
    selectRouterQueryParams,
    (state, queryParams) => queryParams && queryParams[paramKey]
  );
