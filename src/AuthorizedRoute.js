import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setLoginRedirectUrl } from "./reducer/auth.store";

@withRouter
@connect(
  null,
  { setLoginRedirectUrl }
)
export default class AuthorizedRoute extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired
    // component: PropTypes.element
  };

  render() {
    const { component: Component, ...rest } = this.props;

    const isLogged = sessionStorage.getItem("userName") !== null ? true : false;

    if (!isLogged) {
      this.props.setLoginRedirectUrl(this.props.location.pathname);
    }
    console.log(2222, "im a authPage");
    // console.log(isLogged, Component, { ...rest });

    return (
      <Route
        {...rest}
        render={props => {
          return isLogged ? <Component /> : <Redirect to="/login" />;
        }}
      />
    );
  }
}
