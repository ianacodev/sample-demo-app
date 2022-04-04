import { HttpErrorResponse } from '@angular/common/http';
import * as fromRouterActions from './router.actions';

describe('Router Actions', () => {
  describe('Go', () => {
    it('should create an action', () => {
      const expectedAction = {
        type: fromRouterActions.RouterActionTypes.Go as any,
        path: [],
        query: {},
        extras: {},
      };
      expect(fromRouterActions.go({ path: [], query: {}, extras: {} })).toEqual(
        expectedAction
      );
    });
  });

  describe('Back', () => {
    it('should create an action', () => {
      const expectedAction = {
        type: fromRouterActions.RouterActionTypes.Back as any,
      };
      expect(fromRouterActions.back()).toEqual(expectedAction);
    });
  });

  describe('Forward', () => {
    it('should create an action', () => {
      const error = {} as HttpErrorResponse;
      const expectedAction = {
        type: fromRouterActions.RouterActionTypes.Forward as any,
      };
      expect(fromRouterActions.forward()).toEqual(expectedAction);
    });
  });
});
