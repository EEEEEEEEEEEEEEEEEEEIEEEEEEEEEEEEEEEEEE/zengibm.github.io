import React, { Component } from "react";
import PropTypes from "prop-types";
import "./scss/article.scss";
export default class article_detail extends Component {
  static propTypes = {};

  constructor() {
    super();
    this.handle_back = this.handle_back.bind(this);
  }

  handle_back() {
    this.props.history.goBack();
  }

  render() {
    console.log(this.props, 333);
    let isid = "";
    try {
      isid = this.props.match.params.id;
    } catch (e) {
      isid = "";
    }
    return (
      <div className="acticle_detail">
        <header>
          <h1 onClick={this.handle_back}>文章详情</h1>
        </header>
        <div className="content">
          <h3>我是文章详情1133331</h3>
          <p>
            <span>2019年10月09日</span>
          </p>
          <p>
            Deepin是由武汉深之度科技有限公司开发的Linux发行版。Deepin 是一个基于
            Linux
            的操作系统，专注于使用者对日常办公、学习、生活和娱乐的操作体验的极致，适合笔记本、桌面计算机和一体机。它包含了所有您需要的应用程序，网页浏览器、幻灯片演示、文档编辑、电子表格、娱乐、声音和图片处理软件，即时通讯软件等等。Deepin
            的历史可以追溯到 2004年，其前身 Hiweed Linux 是中国第一个基于
            Debian的本地化衍生版，并提供轻量级的可用LiveCD，旨在创造一个全新的简单、易用、美观的
            Linux 操作系统。——来自360百科
          </p>
          <p>
            <img src={require("./../../common/img/index/1.1.png")} />
          </p>
          <p>
            Deepin是由武汉深之度科技有限公司开发的Linux发行版。Deepin 是一个基于
            Linux
            的操作系统，专注于使用者对日常办公、学习、生活和娱乐的操作体验的极致，适合笔记本、桌面计算机和一体机。它包含了所有您需要的应用程序，网页浏览器、幻灯片演示、文档编辑、电子表格、娱乐、声音和图片处理软件，即时通讯软件等等。Deepin
            的历史可以追溯到 2004年，其前身 Hiweed Linux 是中国第一个基于
            Debian的本地化衍生版，并提供轻量级的可用LiveCD，旨在创造一个全新的简单、易用、美观的
            Linux 操作系统。——来自360百科
          </p>
          <p>
            <img src={require("./../../common/img/index/1.1.png")} />
          </p>
          <p>
            Deepin是由武汉深之度科技有限公司开发的Linux发行版。Deepin 是一个基于
            Linux
            的操作系统，专注于使用者对日常办公、学习、生活和娱乐的操作体验的极致，适合笔记本、桌面计算机和一体机。它包含了所有您需要的应用程序，网页浏览器、幻灯片演示、文档编辑、电子表格、娱乐、声音和图片处理软件，即时通讯软件等等。Deepin
            的历史可以追溯到 2004年，其前身 Hiweed Linux 是中国第一个基于
            Debian的本地化衍生版，并提供轻量级的可用LiveCD，旨在创造一个全新的简单、易用、美观的
            Linux 操作系统。——来自360百科
          </p>
          <p>
            <img src={require("./../../common/img/index/1.1.png")} />
          </p>
        </div>
      </div>
    );
  }
}
