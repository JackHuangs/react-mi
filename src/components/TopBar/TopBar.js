import React, { Component } from "react";
import { SearchBar } from "antd-mobile";
import "./topbar.css";

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-logo">
          <img src="images/common/logo.png" alt="" />
        </div>
        <SearchBar
          className="top-bar-search"
          placeholder="搜索商品名称"
          ref={ref => (this.manualFocusInst = ref)}
        />
        <div className="top-bar-profile">
          <img src="images/tarbar/profile.png" alt="" />
        </div>
      </div>
    );
  }
}

export default TopBar;
