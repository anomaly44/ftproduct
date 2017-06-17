import { createStore, applyMiddleware, compose } from 'redux'
import { fromJS } from 'immutable'
import reducer from './rootReducer'
import rootSaga from './rootSaga'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();

export const initStore = (initialState = {}) => {

  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      }) : compose;
  const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
  );

  const store = createStore(reducer, fromJS(initialState), enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
};
