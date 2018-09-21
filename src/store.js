import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';

var ReduxThunk = require('redux-thunk').default

const initialState = [];
const middleware = [ReduxThunk];

const store  = createStore(
  rootReducer, 
  initialState, 
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;