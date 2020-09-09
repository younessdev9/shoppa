import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';

const store = createStore(rootReducer, composeWithDevTools());

const persistor = persistStore(store);

export default { store, persistor };
