import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './saga/rootSaga';
import rootReducers from './reducer/rootReducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducers,
  compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
store.runSaga = sagaMiddleware.run;
export default store;
