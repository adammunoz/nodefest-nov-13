// @flow

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from 'components/app';
import { store } from 'domain/store/main';
require('material-design-lite/material.min.css');
require('style/main.scss');

// User middleware

function onIncCounter(): { type: string} {
  return store.dispatch({ type: 'INC' });
}

function onDecCounter(): { type: string} {
  return store.dispatch({ type: 'DEC' });
}

// Render

function render() {
  ReactDOM.render(
    <App
      state={store.getState()}
      onIncrement={onIncCounter}
      onDecrement={onDecCounter}
    />,
    document.getElementById('app'));
}

store.subscribe(render);

if (module.hot) {
  module.hot.accept();
  render();
}