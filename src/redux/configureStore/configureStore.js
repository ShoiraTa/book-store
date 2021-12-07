/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers } from 'redux';
import reducer from '../books/books';

const reducers = combineReducers({
  reducer,
  // additional reducers could be added here
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
