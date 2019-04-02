import React, { Component } from "react";
import "./scss/navlist.scss";
export default class navlist extends Component {
  constructor() {
    super();
    this.state = {
      on: 0,
      list: ["首页", "归档", "搜搜", "标签", "其他文章"]
    };
  }
  change_class() {}
  render() {
    const { list, on } = this.state;
    return (
      <div className="navlist">
        <ul>
          {list.map((v, k) => {
            return (
              <li
                key={k}
                className={k == on ? "active" : null}
                onClick={e => {
                  this.setState({
                    on: k
                  });
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
