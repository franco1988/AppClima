import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './containers/App';

ReactDOM.render(
  <BrowserRouter basename="/AppClima">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
