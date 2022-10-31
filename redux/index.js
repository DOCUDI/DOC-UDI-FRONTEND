import { persistStore } from 'redux-persist';
import configureStore from './configureStore';
import reducers from './reducers';
import rootSaga from './sagas';

// Redux Persist
const finalReducers = reducers;

const { store } = configureStore(finalReducers, rootSaga);

const persistor = persistStore(store);

export { store, persistor };
