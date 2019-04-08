import React, { Component } from "react";
import "./scss/home.scss";
export default class home extends Component {
  constructor() {
    super();
    this.state = {
      contart_list: ["github", "email", "qq"],
      article_list: [],
      count: 1
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        count: 1
      });
    }, 1000);
  }
  shouldComponentUpdate(nP, nS) {
    if (nS.count == this.state.count) {
      return false;
    }
  }
  render() {
    const { contart_list, count } = this.state;
    console.log("我渲染了", count);
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
            <h2>文章列表</h2>
            <ul>
              <h3 className="list_date">2019-2-10</h3>
              <li>
                <div className="content">
                  <h4>文章标题</h4>
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
                  <h4>文章标题</h4>
                  <p>
                    文章简介 文章简介 文章 文章简介 文章简介 文章 文章简介
                    文章简介 文章 文章简介 文章简介 文章 文章简介 文章简介 文章
                    简介 文章简介 文章简介
                  </p>
                </div>
                <span>10:10:40</span>
              </li>
              <li>
                <div className="content">
                  <h4>文章标题</h4>
                  <p>
                    文章简介 文章简介 文章 文章简介 文章简介 文章 文章简介
                    文章简介 文章 文章简介 文章简介 文章 文章简介 文章简介 文章
                    简介 文章简介 文章简介
                  </p>
                </div>
                <span>10:10:40</span>
              </li>
              <li>
                <div className="content">
                  <h4>文章标题</h4>
                  <p>
                    文章简介 文章简介 文章 文章简介 文章简介 文章 文章简介
                    文章简介 文章 文章简介 文章简介 文章 文章简介 文章简介 文章
                    简介 文章简介 文章简介
                  </p>
                </div>
                <span>10:10:40</span>
              </li>
              <li>
                <div className="content">
                  <h4>文章标题</h4>
                  <p>
                    文章简介 文章简介 文章 文章简介 文章简介 文章 文章简介
                    文章简介 文章 文章简介 文章简介 文章 文章简介 文章简介 文章
                    简介 文章简介 文章简介
                  </p>
                </div>
                <span>10:10:40</span>
              </li>
              <li>
                <div className="content">
                  <h4>文章标题</h4>
                  <p>
                    文章简介 文章简介 文章 文章简介 文章简介 文章 文章简介
                    文章简介 文章 文章简介 文章简介 文章 文章简介 文章简介 文章
                    简介 文章简介 文章简介
                  </p>
                </div>
                <span>10:10:40</span>
              </li>
              <li>
                <div className="content">
                  <h4>文章标题</h4>
                  <p>
                    文章简介 文章简介 文章 文章简介 文章简介 文章 文章简介
                    文章简介 文章 文章简介 文章简介 文章 文章简介 文章简介 文章
                    简介 文章简介 文章简介
                  </p>
                </div>
                <span>10:10:40</span>
              </li>
            </ul>
          </div>

          <div className="projects">
            <h3>项目</h3>
            <div>
              <ul>
                <li>
                  <em>打飞机游戏:</em>
                  <p>
                    打飞机游戏打飞机游戏打飞机游戏打飞机游戏打飞机游戏打飞机游戏打飞机游戏
                  </p>
                </li>
                <li>
                  <em>打飞机游戏:</em>
                  <p>
                    打飞机游戏打飞机游戏打飞机游戏打飞机游戏打飞机游戏打飞机游戏打飞机游戏
                  </p>
                </li>
                <li>
                  <em>打飞机游戏:</em>
                  <p>
                    打飞机游戏打飞机游戏打飞机游戏打飞机游戏打飞机游戏打飞机游戏打飞机游戏
                  </p>
                </li>
                <li>
                  <em>打飞机游戏:</em>
                  <p>
                    打飞机游戏打飞机游戏打飞机游戏打飞机游戏打飞机游戏打飞机游戏打飞机游戏
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
