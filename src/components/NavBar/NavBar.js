import React, { Component } from "react";
import { Tabs } from "antd-mobile";
import "./NavBar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarArr: [
        { id: 1, title: "推荐" },
        { id: 1, title: "手机" },
        { id: 1, title: "智能" },
        { id: 1, title: "电视" },
        { id: 1, title: "笔记本" },
        { id: 1, title: "家电 " },
        { id: 1, title: "生活周边" }
      ]
    };
  }
  render() {
    return (
      <div className="nav-bar">
        <Tabs
          tabs={this.state.navBarArr}
          renderTabBar={props => <Tabs.DefaultTabBar {...props} page={6} />}
        ></Tabs>
      </div>
    );
  }
}

export default NavBar;
