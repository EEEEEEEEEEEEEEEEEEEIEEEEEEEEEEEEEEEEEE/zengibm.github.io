import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class home extends Component {
  static propTypes = {
    // prop: PropTypes
  };

  render() {
    return (
      <div className="home">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />

        {/* <header>
          <Link to="/">
            <div className="avatar">
              <img src={require('../../common/img/avatar.jpeg')} />
            </div>
            <div className="title">
              <h3>圈圈的代码屋</h3>
            </div>
          </Link>
          <ul className="list_link">
            <li>按钮</li>
          </ul>
        </header> */}
      </div>
    );
  }
}



function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
  
  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
  