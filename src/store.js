import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsReducer from './reducers/product.reducer';
const rootReducers = combineReducers({
  products: productsReducer,
});
const store = createStore(rootReducers, composeWithDevTools());

export default store;
