import data from '../data.json';
const INITIAL_STATE = {
  products: data,
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default productsReducer;
