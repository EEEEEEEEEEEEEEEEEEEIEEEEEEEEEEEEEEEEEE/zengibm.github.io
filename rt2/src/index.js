import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Content from "./Content";

import createStore from "./store";
import themeReducer from "./reducer";


const store = createStore(themeReducer)
export default class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
