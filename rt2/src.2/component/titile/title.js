import React, { Component } from "react";
import PropTypes from "prop-types";

export default class title extends Component {
  render() {
    return (
      <div>
        <h1
          style={{
            color: this.context.themeColor
          }}
        >
          React.js 小书标题
        </h1>
      </div>
    );
  }
}

title.contextTypes = {
  themeColor: PropTypes.string
};
