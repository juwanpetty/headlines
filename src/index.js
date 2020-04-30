import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { App } from "./App";
import rootReducer from "./store/reducers";
import { saveState, loadState } from "./helpers/localStorage";
import throttle from "lodash.throttle";

const persistedState = loadState();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
