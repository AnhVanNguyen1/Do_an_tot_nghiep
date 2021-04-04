import { takeLatest } from 'redux-saga/effects';
import API from '../../config/api';
import { ROUTES } from '../../router/routerType';
import { ACTIONS } from '../redux/type';
function* loginFunc(action) {
  const { formValue, push } = action.payload;
  console.log(action.payload);
  try {
    // push(ROUTES.HOME);
    const response = yield API.post('api/login', formValue);
  } catch (error) {
    console.log(error);
  }
}

function* loginSaga() {
  yield takeLatest(ACTIONS.LOGIN, loginFunc);
}

export default {
  loginSaga,
};
