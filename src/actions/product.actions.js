import { FILTER_PRODUCT_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from '../types';

export const filterProducts = (products, size) => {
  return {
    type: FILTER_PRODUCT_BY_SIZE,
    payload: {
      size: size,
      items:
        size === ''
          ? products
          : products.filter((item) => item.availableSizes.indexOf(size) >= 0),
    },
  };
};

export const sortProducts = (filtredProducts, sort) => {
  const sortedProducts = filtredProducts.slice();
  if (sort === '') {
    sortProducts.sort((a.b) => (a._id > b._id ? 1 : -1));
  } else {
    sortedProducts.sort((a, b) =>
      sort === 'lowest'
        ? a.price > b.price
          ? 1
          : -1
        : a.price < b.price
        ? -1
        : 1
    );
  }
  return {
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: sortedProducts,
    },
  };
};
