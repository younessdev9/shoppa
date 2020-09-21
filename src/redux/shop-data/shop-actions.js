import { FILTER_PRODUCT_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from './shop.types';
import data from './data.json';
export const filterProductsAction = (e) => {
  return {
    type: FILTER_PRODUCT_BY_SIZE,
    payload: {
      size: e.target.value,
      products:
        e.target.value === ''
          ? data.products
          : data.products.filter(
              (item) => item.availableSizes.indexOf(e.target.value) >= 0
            ),
    },
  };
};
export const sortproductsAction = (e, filtredProducts) => {
  const prod = filtredProducts.slice();
  if (e.target.value === 'latest') {
    prod.sort((a, b) => (a._id > b._id ? 1 : -1));
  } else {
    prod.sort((a, b) =>
      e.target.value === 'lowest'
        ? a.price > b.price
          ? 1
          : -1
        : a.price > b.price
        ? -1
        : 1
    );
  }
  return {
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: e.target.sort,
      products: prod,
    },
  };
};
