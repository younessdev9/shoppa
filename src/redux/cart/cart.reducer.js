const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const cartItems = state.cartItems.slice();
  let alreadyInCart = false;
  cartItems.forEach((item) => {
    if (item._id === action.payload._id) {
      item.count++;
      alreadyInCart = true;
    }
  });
  if (!alreadyInCart) {
    cartItems.push({ ...action.payload, count: 1 });
  }
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: cartItems,
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: cartItems.filter((item) => item._id !== action.payload._id),
      };
    default:
      return state;
  }
};
export default cartReducer;
