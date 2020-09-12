import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';

export const store = createStore(rootReducer, composeWithDevTools());

export const persistor = persistStore(store);
