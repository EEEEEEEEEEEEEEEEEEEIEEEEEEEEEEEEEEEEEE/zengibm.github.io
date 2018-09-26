import React, { Component } from "react";
import PropTypes from "prop-types";



import Header from "../header/header";
import Main from "../main/main";


export default class main extends Component {

  constructor() {
    super();
    this.state = {
      themeColor: "red"
    };
  }
  getChildContext() {
    return {
      themeColor: this.state.themeColor
    };
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Main />
      </div>
    );
  }
}
main.childContextTypes = {
  themeColor: PropTypes.string
};
