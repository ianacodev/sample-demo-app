import * as fromRouterSelectors from './router.selectors';
import * as fromReducers from '../reducers';

describe('Router Selectors', () => {
  const initialState = createState();

  it('should select router params', () => {
    const result = fromRouterSelectors.selectRouterParams.projector(
      initialState.state
    );
    expect(result).toEqual(initialState.state.params);
  });

  it('should select router param', () => {
    const { state } = initialState;
    const result = fromRouterSelectors
      .selectRouterParam('testA')
      .projector(state.params);
    expect(result).toEqual(state.params.testA);
  });

  it('should select router query params', () => {
    const result = fromRouterSelectors.selectRouterQueryParams.projector(
      initialState.state
    );
    expect(result).toEqual(initialState.state.queryParams);
  });

  it('should select router query param', () => {
    const { state } = initialState;
    const result = fromRouterSelectors
      .selectRouterQueryParam('testB')
      .projector(state.queryParams);
    expect(result).toEqual(state.queryParams.testB);
  });
});

// helper functions

/**
 * create state
 * @returns state
 */
function createState() {
  return {
    state: {
      url: '/test',
      params: { testA: 'A' },
      queryParams: { testB: 'B' },
    },
    navigationId: 1,
  };
}
