import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./common/scss/index.scss";
import "./config";
import ruducers from "./reducer/reducers";
import App from "App.js";

import 'lib-flexible'

function devToolsExtension(env) {
  if (env === "development") {
    return compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : () => {}
    );
  } else {
    return compose(applyMiddleware(thunk));
  }
}

const store = createStore(
  ruducers,
  devToolsExtension(window.env.devToolsExtension)
);

console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
