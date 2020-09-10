import { ADD_TO_CART, REMOVE_FROM_CART } from './cart.types';

export const addToCartAction = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
export const removeFromCartAction = (product) => ({
  type: REMOVE_FROM_CART,
  payload: product,
});
