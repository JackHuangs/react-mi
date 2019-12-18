import React, { Component } from "react";
import { Flex } from "antd-mobile";
import "./ProfileMenu.css";

class ProfileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Flex className="profile-menu">
        <div className="profile-menu-logo">
          <img src={this.props.url} alt="" />
        </div>
        <Flex justify="between" className="profile-menu-title">
          <p>{this.props.title}</p>
          <Flex className="profile-menu-more">
            <p>{this.props.more}</p>
            <img
              src={require("statics/images/common/right-arrow.png")}
              alt=""
            />
          </Flex>
        </Flex>
      </Flex>
    );
  }
}

export default ProfileMenu;
