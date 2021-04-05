import { createStore } from 'redux';
import { rootReducer } from '../reducers';

const webExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, webExtension);

export default store;
