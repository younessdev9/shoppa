import data from './data.json';
const INITIAL_STATE = {
  products: data.products,
  sort: '',
  size: '',
};
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FILTER_PRODUCT_BY_SIZE':
      return {
        ...state,
        products: action.payload.products,
        sort: action.payload.sort,
        size: action.payload.size,
      };
    case 'ORDER_PRODUCTS_BY_PRICE':
      return {
        ...state,
        products: action.payload.products,
        sort: action.payload.sort,
        size: action.payload.size,
      };
    default:
      return state;
  }
};
export default shopReducer;
