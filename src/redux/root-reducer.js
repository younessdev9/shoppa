import { combineReducers } from 'redux';
import shopReducer from './shop-data/shop.reducer';
import cartReducer from './cart/cart.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};
const rootReducer = combineReducers({
  shopData: shopReducer,
  cart: cartReducer,
});
export default persistReducer(persistConfig, rootReducer);
