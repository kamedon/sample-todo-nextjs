import {Module} from './index';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

const reducer = Module.createAppReducer();
const composeEnhancers = compose(applyMiddleware(thunk));

export const myAppStore = createStore(
  reducer,
  Module.createInitialState(),
  composeEnhancers
);
