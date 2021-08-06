import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../Reducer/index';
import thunk from 'redux-thunk'

const ReduxDevsToolsOrCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  ReduxDevsToolsOrCompose(applyMiddleware(thunk))
);

export default store;
