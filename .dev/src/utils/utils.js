import React from "react";
import { Route, Redirect } from "react-router-dom";

const RouteWidthSubRoutes = route => {
  // let cache = "";
  // try {
  //   cache = route.meta.cache;
  // } catch (error) {
  //   console.log("页面不需要缓存");
  // }
  /**
   * @param auth 如果为真则需要验证登录
   * @param token 如果没有token则重定向到登录页面
   */
  console.log(route);
  const { path, routes, auth } = route;
  console.log(auth, 222);
  let token = ""; //模拟真是环境token
  return (
    <div>
      {!auth ? (
        <Route
          path={route.path}
          render={props => <route.component {...props} routes={route.routes} />}
        />
      ) : !!token ? (
        <Redirect
          to={{
            pathname: "/login"
            // state: { from: props.location }
          }}
        />
      ) : (
        <Route
          path={path}
          render={props => <route.component {...props} routes={routes} />}
        />
      )}
    </div>
  );
};

export { RouteWidthSubRoutes };
