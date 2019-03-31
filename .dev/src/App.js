import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter, Link } from 'react-router-dom';
import AuthorizedRoute from './AuthorizedRoute';
import Login from './pages/Login/Login';
import Layout from './pages/Layout/Layout';
import NoFound from './pages/NoFound/NoFound';

import Home from './pages/index/home';

const whiteList = ['/login', '/register'];

@withRouter
export default class App extends Component {
  render() {
    /**
     * 判断当前路径,在/目录的话直接跳转/login, 在白名单whiteList数组内的话不做任何改变
     */
    return (
      <div className="app">
        <Route path="/index/home" component={Home} />
        <Redirect from="/" exact to="/index/home" />
        {/* <video controls autoPlay>
          <source
            src={require('./common/files/videos/love.mp4')}
            type="video/mp4"
          />
        </video> */}
        {/* <Switch>
          <Route path="/login" component={Login} />
          <Redirect from="/" exact to={loginRedirectUrl} />
          <AuthorizedRoute path="/path" component={Layout} />
          <Route component={NoFound} />
        </Switch> */}
      </div>
    );
  }
}
