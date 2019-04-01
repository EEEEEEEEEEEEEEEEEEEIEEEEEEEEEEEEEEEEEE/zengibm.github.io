import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';
import './home.scss';
export default class home extends Component {
  static propTypes = {
    // prop: PropTypes
  };
  constructor() {
    super();
    this.state = { show_tabs: true, h: 0 };
    this.toggle_tabs = this.toggle_tabs.bind(this);
  }
  toggle_tabs() {
    let target_h = 0;
    if (this.state.h === 0) {
      target_h = 320;
    } else {
      target_h = 0;
    }

    this.setState({
      h: target_h
    });
  }
  handle_resize() {
    setTimeout(() => {
      window.onresize = e => {
        if (window.screen.width > 376) {
          this.setState({
            h: 60
          });
        } else {
          this.setState({
            h: 0
          });
        }
      };
    }, 20);
  }
  componentDidMount() {
    this.handle_resize();
  }
  render() {
    return (
      <div className="home">
        <header>
          <div to="/index/home" className="top">
            <Link to="/index/home">
              <div className="avatar" />
              <div className="title">
                <h3>圈圈的修真世界</h3>
              </div>
            </Link>
            <i onClick={this.toggle_tabs} />
          </div>
          <Motion style={{ x: spring(this.state.h) }}>
            {interpolatingStyle => {
              console.log(interpolatingStyle);
              return (
                <ul
                  className="list_link"
                  style={{ height: interpolatingStyle.x / 2 }}
                >
                  <li>首页</li>
                  <li>归档</li>
                  <li>搜索</li>
                  <li>标签</li>
                  <li>其他文章</li>
                </ul>
              );
            }}
          </Motion>
        </header>
        {/* <Motion style={{ x: spring(this.state.h) }}>
          {interpolatingStyle => {
            console.log(interpolatingStyle);
            return (
              <div style={{ height: interpolatingStyle.x }} className="box" />
            );
          }}
        </Motion> */}
      </div>
    );
  }
}
