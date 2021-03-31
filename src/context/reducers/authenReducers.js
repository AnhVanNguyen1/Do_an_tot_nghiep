import React, { createContext, useContext, useReducer } from 'react';

const StateContext = createContext();

export const AuthenticateProvider = ({ reducer, initState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initState)}>
    {children}
  </StateContext.Provider>
);

export const useStateContext = () => useContext(StateContext);
