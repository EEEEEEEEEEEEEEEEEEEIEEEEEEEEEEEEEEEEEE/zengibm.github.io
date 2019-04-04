import React, { Component } from "react";
import { Switch, Redirect } from "react-router-dom";
import NavList from "../navlist";

import { RouteWidthSubRoutes } from "../../utils/utils";

export default class index extends Component {
  static propTypes = {
    // prop: PropTypes
  };

  render() {
    const { routes } = this.props;
    return (
      <div className="web_index">
        <Switch>
          {routes.map((route, i) => (
            <RouteWidthSubRoutes key={i} {...route} />
          ))}
          <Redirect from="/web/" exact to="/web/home" />
        </Switch>
        <NavList />
      </div>
    );
  }
}
