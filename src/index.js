import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { pageSwitcherSubscribe } from './reducers/PageSwitcherReducer';
import App from './App';

let store = createStore(pageSwitcherSubscribe);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

