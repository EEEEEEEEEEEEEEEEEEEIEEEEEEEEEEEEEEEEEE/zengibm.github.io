import React, { Component } from "react";
import "./scss/home.scss";
export default class home extends Component {
  constructor() {
    super();
    this.state = {
      contart_list: ["github", "email", "qq"],
      article_list: []
    };
  }
  render() {
    const { contart_list } = this.state;
    return (
      <div className="web_home">
        <div className="top">
          <div className="avatar">
            <img src={require("../../common/img/avatar.jpeg")} />
          </div>
          <h2>圈圈的代码世界</h2>
          <div className="route_link">
            {contart_list.map((v, k) => {
              return <a href="" key={k} />;
            })}
          </div>
        </div>
        <section className="container">
          <div className="article_list">
            <ul>
              <h2 className="list_date">2019-2-10</h2>
              <li>
                <div className="content">
                  <h3>文章标题</h3>
                  <p>
                    文章简介 文章简介 文章 文章简介 文章简介 文章 文章简介
                    文章简介 文章 文章简介 文章简介 文章 文章简介 文章简介 文章
                    简介 文章简介 文章简介
                  </p>
                </div>
                <span>10:10:30</span>
              </li>
              <li>
                <div className="content">
                  <h3>文章标题</h3>
                  <p>
                    文章简介 文章简介 文章 文章简介 文章简介 文章 文章简介
                    文章简介 文章 文章简介 文章简介 文章 文章简介 文章简介 文章
                    简介 文章简介 文章简介
                  </p>
                </div>
                <span>10:10:30</span>
              </li>
              <li>
                <div className="content">
                  <h3>文章标题</h3>
                  <p>
                    文章简介 文章简介 文章 文章简介 文章简介 文章 文章简介
                    文章简介 文章 文章简介 文章简介 文章 文章简介 文章简介 文章
                    简介 文章简介 文章简介
                  </p>
                </div>
                <span>10:10:30</span>
              </li>
            </ul>
            <ul>
              <h2 className="list_date">2019-2-10</h2>
              <li>
                <div className="content">
                  <h3>文章标题</h3>
                  <p>
                    文章简介 文章简介 文章 文章简介 文章简介 文章 文章简介
                    文章简介 文章 文章简介 文章简介 文章 文章简介 文章简介 文章
                    简介 文章简介 文章简介
                  </p>
                </div>
                <span>10:10:30</span>
              </li>
              <li>
                <div className="content">
                  <h3>文章标题</h3>
                  <p>
                    文章简介 文章简介 文章 文章简介 文章简介 文章 文章简介
                    文章简介 文章 文章简介 文章简介 文章 文章简介 文章简介 文章
                    简介 文章简介 文章简介
                  </p>
                </div>
                <span>10:10:30</span>
              </li>
              <li>
                <div className="content">
                  <h3>文章标题</h3>
                  <p>
                    文章简介 文章简介 文章 文章简介 文章简介 文章 文章简介
                    文章简介 文章 文章简介 文章简介 文章 文章简介 文章简介 文章
                    简介 文章简介 文章简介
                  </p>
                </div>
                <span>10:10:30</span>
              </li>
            </ul>
            <ul>
              <h2 className="list_date">2019-2-10</h2>
              <li>
                <div className="content">
                  <h3>文章标题</h3>
                  <p>
                    文章简介 文章简介 文章 文章简介 文章简介 文章 文章简介
                    文章简介 文章 文章简介 文章简介 文章 文章简介 文章简介 文章
                    简介 文章简介 文章简介
                  </p>
                </div>
                <span>10:10:30</span>
              </li>
              <li>
                <div className="content">
                  <h3>文章标题</h3>
                  <p>
                    文章简介 文章简介 文章 文章简介 文章简介 文章 文章简介
                    文章简介 文章 文章简介 文章简介 文章 文章简介 文章简介 文章
                    简介 文章简介 文章简介
                  </p>
                </div>
                <span>10:10:30</span>
              </li>
              <li>
                <div className="content">
                  <h3>文章标题</h3>
                  <p>
                    文章简介 文章简介 文章 文章简介 文章简介 文章 文章简介
                    文章简介 文章 文章简介 文章简介 文章 文章简介 文章简介 文章
                    简介 文章简介 文章简介
                  </p>
                </div>
                <span>10:10:30</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
