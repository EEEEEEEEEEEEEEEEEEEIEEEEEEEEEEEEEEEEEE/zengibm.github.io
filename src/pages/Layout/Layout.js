import React, { Component } from "react";
import { Route } from "react-router-dom";
import { apiHome } from "../../api/home";
const Other1 = () => <h1>Other1</h1>;
const Other2 = () => <h1>Other2</h1>;

export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showList: []
    };
  }

  componentWillMount() {
    /**
     * @method initMenu 请求菜单资源信息,初始化菜单
     */
    this.initMenu();
  }

  componentDidMount() {
    /**
     * @method accessRoute 路由授权
     */
    this.accessRoute();
  }

  accessRoute() {
    /**
     * @todo 读取权限列表,渲染出角色对应的组件
     */
    console.log("菜单授权");
  }

  initMenu = () => {
    apiHome('/api/seller', { method: "get" }).then(res => {
      this.setState({
        showList: res.list
      });
    });
    console.log("初始化菜单");
  };
  render() {
    return (
      <div>
        <h1>首页</h1>
        <Route path="/path/other1" component={Other1} />
        <Route path="/path/other2" component={Other2} />
      </div>
    );
  }
}
