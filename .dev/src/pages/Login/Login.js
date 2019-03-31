import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
@withRouter
@connect(state => state.authStore)
export default class Layout extends Component {
  handleClickLogin = () => {
    /**
     * 登录成功后
     * 读取redux保存路径 ,如有保存就跳转这个路径,没有就直接跳转默认路径-比如说主页
     */
    let login2Url = !this.props.loginRedireUrl ? "/path" : loginRedireUrl;
    this.props.history.push(login2Url);
    sessionStorage.setItem("userName", "quanibm");
    console.log("login clicked");
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={this.handleClickLogin}>login</button>
      </div>
    );
  }
}
