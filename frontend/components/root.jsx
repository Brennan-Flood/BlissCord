import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './app';

const Root = ({ store }) => (
  
  <Provider store={store}>
    <h1>Discord Clone!!!</h1>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

export default Root;
