import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';

// import { Router } from 'react-router';
// import createBrowserHistory from 'history/createBrowserHistory';

// const history = createBrowserHistory()


ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,document.getElementById('root')
);
