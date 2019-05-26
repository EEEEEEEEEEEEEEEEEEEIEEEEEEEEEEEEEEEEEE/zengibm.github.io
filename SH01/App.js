import React, { Component } from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducers from "./store/reducers";
import Apptabnavigator from "./route";

const store = createStore(reducers, compose(applyMiddleware(thunk)));
console.log(global, window);
console.log(global.cookie);
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Apptabnavigator />
      </Provider>
    );
  }
}
