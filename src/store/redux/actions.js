import { ACTIONS } from './type';

export const login = (payload) => ({
  type: ACTIONS.LOGIN,
  payload,
});

export const register = (payload) => ({
  type: ACTIONS.REGISTER,
  payload,
});

export const forgotPass = (payload) => ({
  type: ACTIONS.FORGOTPASS,
  payload,
});

export const changePass = (payload) => ({
  type: ACTIONS.CHANGE_PASSWORD,
  payload,
});
