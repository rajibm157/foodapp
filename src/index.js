import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import Navigator from '_navigations';
import store from '_app/store';

export default function () {
  return (
    <Provider store={store}>
      <Navigator />
      <StatusBar style="auto" />
    </Provider>
  );
}
