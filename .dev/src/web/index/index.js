import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavList from "../navlist";
import home from "./home";
export default class index extends Component {
  static propTypes = {
    // prop: PropTypes
  };

  render() {
    return (
      <div className="web_index">
        <Switch>
          <Route path="/web/home" component={home} />
          <Redirect from="/web/" exact to="/web/home" />
        </Switch>
        <NavList />
      </div>
    );
  }
}
