// common actions

export const commonActions = {
  loadingStart: (type, payload) => ({
    type: `${type}_loading_start`,
    payload,
  }),
  loadingEnd: (type, payload) => ({
    type: `${type}_loading_end`,
    payload,
  }),
  responseSuccess: (type, payload) => ({
    type: `${type}_response_success`,
    payload,
  }),
  responseFall: (type, payload) => ({
    type: `${type}_response_fall`,
    payload,
  }),
};

// common types

export const commonTypes = {
  loadingStart: (type) => `${type}_loading_start`,
  loadingEnd: (type) => `${type}_loading_end`,
  responseSuccess: (type) => `${type}_response_success`,
  responseFall: (type) => `${type}_response_fall`,
};
