import React, { Component } from "react";
import PropTypes from "prop-types";

export default class article_detail extends Component {
  static propTypes = {};

  constructor() {
    super();
    this.handle_back = this.handle_back.bind(this);
  }

  handle_back() {
    console.log(111);
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <h3
          style={{
            fontSize: "100px"
          }}
          onClick={this.handle_back}
        >
          我是文章详情111
        </h3>
      </div>
    );
  }
}
