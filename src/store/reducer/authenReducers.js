import { commonTypes } from '../redux/common';

export const initValue = {
  email: null,
  createdAt: null,
  role: null,
  token: null,
  loading: false,
  error: null,
};

export const authenReducers = (state = initValue, { type, payload }) => {
  switch (type) {
    case commonTypes.responseSuccess(type):
      return {
        ...state,
        email: payload.body.email,
        createdAt: payload.body.createdAt,
        role: payload.body.userRole,
        token: payload.token,
      };
    case commonTypes.responseFall(type):
      return { ...initValue, error: payload };

    case commonTypes.loadingStart(type):
      return {
        ...state,
        loading: payload,
      };
    case commonTypes.responseFall(type):
      return {
        ...state,
        loading: payload,
      };

    default:
      return Object.assign({}, state);
  }
};
