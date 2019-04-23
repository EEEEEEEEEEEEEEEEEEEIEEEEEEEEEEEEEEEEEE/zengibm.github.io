import React, { Component } from "react";
import NavList from "../navlist";
import "./scss/home.scss";
export default class home extends Component {
  constructor() {
    super();
    this.state = {
      contart_list: ["github", "email", "qq"],
      article_list: [],
      count: 1
    };
    this.article_click = this.article_click.bind(this);
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
  article_click(id) {
    console.log(this.props);
    const { history } = this.props;
    history.push("/web/article_detail/" + id);
  }
  render() {
    const { contart_list, count, img_src } = this.state;
    console.log("我渲染了", count);
    return (
      <div className="web_home">
        <div className="top">
          <div className="avatar">
            <img src={require("../../common/img/avatar.jpeg")} />
            <i className="menu" />
          </div>
          <h2>圈圈的代码世界</h2>
          <div className="route_link">
            {contart_list.map((v, k) => {
              let uri = "";
              switch (v) {
                case "github":
                  uri = "https://github.com/zengibm?tab=projects";
                  break;
                case "email":
                  uri = "mailto:zengibm@gmail.com";
                  break;
                case "qq":
                  uri = "https://github.com/zengibm?tab=projects";
                  if (
                    /(android|Android|iphone|Iphone)/g.test(navigator.userAgent)
                  ) {
                    uri =
                      "mqqwpa://im/chat?chat_type=wpa&uin=327255868&version=1&src_type=web&web_src=oicqzone.com";
                  } else {
                    uri =
                      "http://wpa.qq.com/msgrd?v=3&uin=327255868&site=oicqzone.com&menu=yes";
                  }
                  break;
              }
              return <a href={uri} target="_blank" key={k} />;
            })}
          </div>
        </div>
        <section className="container">
          <div className="article_list">
            <article
              onClick={() => {
                this.article_click(111);
              }}
            >
              <div className="small_header">
                <a>
                  <img
                    src={require("./../../common/img/index/1.1.png")}
                    alt="图片"
                  />
                </a>
              </div>
              <div className="content">
                <header>
                  <h2>
                    <a>文章标题</a>
                  </h2>
                </header>
                <p>
                  文章简介 文章简介 文章 文章简介 文章简介 文章 文章简介
                  文章简介 文章 文章简介 文章简介 文章 文章简介 文章简介 文章
                  简介 文章简介 文章简介
                </p>
                <footer>
                  <p>
                    <span>2019-1-2 10:10</span>
                    <span>阅读全文</span>
                  </p>
                </footer>
              </div>
            </article>
            <article
              onClick={() => {
                this.article_click(111);
              }}
            >
              <div className="small_header">
                <a>
                  <img
                    src={require("./../../common/img/index/1.1.png")}
                    alt="图片"
                  />
                </a>
              </div>
              <div className="content">
                <header>
                  <h2>
                    <a>文章标题</a>
                  </h2>
                </header>
                <p>
                  文章简介 文章简介 文章 文章简介 文章简介 文章 文章简介
                  文章简介 文章 文章简介 文章简介 文章 文章简介 文章简介 文章
                  简介 文章简介 文章简介
                </p>
                <footer>
                  <p>
                    <span>2019-1-2 10:10</span>
                    <span>阅读全文</span>
                  </p>
                </footer>
              </div>
            </article>
          </div>
        </section>
        {/* <NavList /> */}
      </div>
    );
  }
}
