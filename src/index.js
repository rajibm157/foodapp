import React from "react";
import { Provider } from "react-redux";

import Navigator from "_navigations";
import store from "_app/store";

export default function () {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
