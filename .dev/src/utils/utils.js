import React from "react";
import { Route } from "react-router-dom";

const RouteWidthSubRoutes = route => (
  <Route
    path={route.path}
    render={props => <route.component {...props} routes={route.routes} />}
  />
);

export { RouteWidthSubRoutes };
