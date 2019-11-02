import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './stores/main';
const store = createStore(reducer);
const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)
AppRegistry.registerComponent('pheyboard', () => Root);
