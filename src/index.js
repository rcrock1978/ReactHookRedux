import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { createReduxStore } from "./components/redux";
import App from "./components/App";

import "./components/styles.css";
import "./preview.css";
import "./fetch.js";

const store = createReduxStore();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
