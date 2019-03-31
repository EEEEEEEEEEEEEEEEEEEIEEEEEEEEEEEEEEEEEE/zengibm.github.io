import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import './home.scss';
export default class home extends Component {
  static propTypes = {
    // prop: PropTypes
  };
  constructor() {
    super();
    this.state = { items: ['hello', 'world', 'click', 'me'], show_tabs: true };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove() {
    const [key] = arguments;
    let newItems = this.state.items.slice();
    newItems.splice(key, 1);
    this.setState({ items: newItems });
  }
  handleAdd() {
    let newItems = this.state.items.concat([prompt('enter some text')]);
    this.setState({ items: newItems });
  }
  render() {
    let items = this.state.items.map((v, k) => {
      return (
        <div
          key={v}
          onClick={e => {
            this.handleRemove(k);
          }}
        >
          {v}
        </div>
      );
    });
    let el = this.state.show_tabs ? (
      <ul className="list_link" >
        <a>
          <i
            onClick={(e) => {
              console.log(111)
              const new_tabs = !this.state.show_tabs;
              this.setState({
                show_tabs : new_tabs
              })
            }}
          />
        </a>
        <li>首页</li>
        <li>归档</li>
        <li>搜索</li>
        <li>标签</li>
        <li>其他文章</li>
      </ul>
    ) : null;
    return (
      <div className="home">
        <header>
          <Link to="/index/home">
            <div className="avatar" />
            <div className="title">
              <h3>圈圈的修真世界</h3>
            </div>
          </Link>
          <ReactCSSTransitionGroup
            component="div"
            className="nav"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={1500}
            transitionName="fale"
          >
            {el}
          </ReactCSSTransitionGroup>
        </header>
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
