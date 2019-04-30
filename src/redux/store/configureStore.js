import rootReducer from '../reducers/index';
import {applyMiddleware, compose, createStore} from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const isDev = process.env.NODE_ENV !== 'production';
const enhancers = (middlewares, isAppEmbedded = false) => {
  return isDev && !isAppEmbedded
    ? composeEnhancers(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);
};

export default function configureStore(isAppEmbedded, initialState) {
  return createStore(
    rootReducer,
    initialState,
    enhancers([])
  );
}
