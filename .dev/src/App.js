import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import AuthorizedRoute from './AuthorizedRoute';
import Login from './pages/Login/Login';
import Layout from './pages/Layout/Layout';
import NoFound from './pages/NoFound/NoFound';

const whiteList = ['/login', '/register'];

@withRouter
export default class App extends Component {
  render() {
    /**
     * 判断当前路径,在/目录的话直接跳转/login, 在白名单whiteList数组内的话不做任何改变
     */
    const loginRedirectUrl =
      whiteList.indexOf(this.props.location.pathname) > -1
        ? this.props.location.pathname
        : '/login';
    return (
      <div>
        <h1>hello, wolrd</h1>
        <p>
          范媛是傻逼!想搭噶及地傻气111
        </p>
        <img src={require('./common/img/girl.jpeg')} />
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
