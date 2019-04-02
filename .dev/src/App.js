import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import pc from "./pc/index";
import web from "./web/index";

@withRouter
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      pathname: ""
    };
  }

  route_redirect() {
    const regexp = /(iphone|android|ipad|Mobile)/gi;
    const { history, location } = this.props;
    if (regexp.test(window.navigator.userAgent)) {
      if (location.pathname === "/web") {
        return;
      }
      history.push("/web");
    } else {
      if (location.pathname === "/pc") {
        return;
      }
      history.push("/pc");
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize");
  }
  componentDidMount() {
    this.route_redirect();
    window.addEventListener("resize", () => {
      this.route_redirect();
    });
  }
  render() {
    /**
     * 判断当前路径,在/目录的话直接跳转/login, 在白名单whiteList数组内的话不做任何改变
     */
    const { pathname } = this.state;
    console.log(333);
    return (
      <div className="app">
        <Switch>
          <Route path="/pc" exact component={pc} />
          <Route path="/web" component={web} />
          <Redirect from="/" exact to={`/${pathname}`} />
        </Switch>
      </div>
    );
  }
}
