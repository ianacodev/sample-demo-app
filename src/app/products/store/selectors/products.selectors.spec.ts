import * as fromProductsSelectors from './products.selectors';
import * as fromReducers from '../reducers';
// test
import * as fromProductsTest from '../../test';

describe('Products Selectors', () => {
  const initialState = createState();

  it('should select products loading', () => {
    const { products } = initialState;
    const result =
      fromProductsSelectors.selectProductsLoading.projector(products);
    expect(result).toEqual(products.loading);
  });

  it('should select products loaded', () => {
    const { products } = initialState;
    const result =
      fromProductsSelectors.selectProductsLoaded.projector(products);
    expect(result).toEqual(products.loaded);
  });

  it('should select product entities', () => {
    const { products } = initialState;
    const result =
      fromProductsSelectors.selectProductEntities.projector(products);
    expect(result).toEqual(products.entities);
  });

  it('should select products', () => {
    const { products } = initialState;
    const result = fromProductsSelectors.selectProducts.projector(products);
    const expected = Object.values(products.entities) as any[];
    expect(result).toEqual(expected);
  });

  it('should select product ids', () => {
    const { products } = initialState;
    const result = fromProductsSelectors.selectProductIds.projector(products);
    const expected = products.ids as string[];
    expect(result).toEqual(expected);
  });

  it('should select product by route param', () => {
    const {
      products: { entities, ids },
    } = initialState;
    const selectedId = ids[0];
    const result = fromProductsSelectors.selectProductByRouteParam.projector(
      entities,
      selectedId
    );
    const expected = entities[selectedId];
    expect(result).toEqual(expected);
  });

  it('should select products error', () => {
    const { products } = initialState;
    const result =
      fromProductsSelectors.selectProductsError.projector(products);
    expect(result).toEqual(products.error);
  });
});

// helper functions

/**
 * create state
 * @returns state
 */
function createState(): fromReducers.ProductsState {
  const { productsMock: products } = fromProductsTest;
  const entities = products.reduce(
    (entities, product) => ({
      ...entities,
      [product.id]: product,
    }),
    {}
  );
  const ids = Object.keys(entities);
  return {
    products: {
      ids,
      entities,
      loading: false,
      loaded: true,
      error: { error: 'error' },
    },
  };
}
