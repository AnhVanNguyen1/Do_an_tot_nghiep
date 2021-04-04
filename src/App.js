import React from 'react';
import './App.css';
import RootRouter from './router';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>
  );
}

export default App;
