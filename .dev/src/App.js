import React, { Component } from "react";
import { Switch, Redirect, withRouter } from "react-router-dom";

import { RouteWidthSubRoutes } from "./utils/utils";

import routes from "./route/routes";

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
      history.push("/web");
    } else {
      history.push("/pc");
    }
  }

  shouldcomponentUpdate(np, ns) {
    if (ns.pathname === this.state.pathname) return false;
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
    return (
      <div className="app">
        <Switch>
          {/* <Route path="/pc" exact component={pc} />
          <Route path="/web" component={web} /> */}
          {routes.map((route, i) => (
            <RouteWidthSubRoutes key={i} {...route} />
          ))}
          <Redirect from="/" exact to={`/${pathname}`} />
        </Switch>
      </div>
    );
  }
}
