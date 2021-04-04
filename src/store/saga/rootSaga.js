import authen from './authenSaga';

import { fork } from 'redux-saga/effects';

export default function* rootSaga() {
  yield fork(authen.loginSaga);
}
