import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProfileHeader.css";

class ProfileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className="profile-header"
        style={{
          background:
            "url(" +
            require("statics/images/common/profile-bg.png") +
            ") center 0 #f37d0f",
          backgroundSize: "auto 100%"
        }}
      >
        <div>
          <img src={require("statics/images/common/avatar.png")} alt="" />
        </div>
        <div>
          <Link to="/login">登录/</Link>
          <Link to="/register">注册</Link>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
