import React, { Component } from "react";
import "./scss/navlist.scss";
export default class navlist extends Component {
  constructor() {
    super();
    this.state = {
      on: 0,
      list: ["首页", "归档", "搜搜", "标签", "其他"]
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(k) {
    console.log(k);
    this.setState({
      on: k
    });
  }
  render() {
    const { list, on } = this.state;
    const year = new Date().getFullYear();
    return (
      <div className="navlist">
        <h3>Copyright © {year} Quan zeng</h3>
        <ul>
          {list.map((v, k) => {
            return (
              <li
                key={k}
                className={k == on ? "active" : null}
                onClick={e => {
                  this.handleClick(k);
                }}
              >
                {v}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
