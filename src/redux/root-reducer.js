import { combineReducers } from 'redux';
import shopReducer from './shop-data/shop.reducer';

export default combineReducers({
  shopData: shopReducer,
});
