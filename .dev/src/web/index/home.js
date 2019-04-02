import React, { Component } from "react";
import "./scss/home.scss";
export default class home extends Component {
  constructor() {
    super();
    this.state = {
      contart_list: ["github", "email", "qq"]
    };
  }
  render() {
    const { contart_list } = this.state;
    return (
      <div className="web_home">
        <div className="top">
          <div className="avatar">
            <img />
          </div>
          {contart_list.map((v, k) => {
            return <a href="">{v}</a>;
          })}
        </div>
      </div>
    );
  }
}
