import React, { Component } from "react";
import ProfileMenu from "components/ProfileMenu/ProfileMenu";
import "./ProfileFunc.css";

class ProfileFunc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuArr: [
        {
          title: "会员中心",
          url: require("statics/images/common/personal.png")
        },
        {
          title: "我的优惠",
          url: require("statics/images/common/personal.png")
        },
        {
          title: "服务中心",
          url: require("statics/images/common/personal.png")
        },
        {
          title: "小米之家",
          url: require("statics/images/common/personal.png")
        },
        {
          title: "我的F码",
          url: require("statics/images/common/personal.png")
        },
        {
          title: "礼物码兑换",
          url: require("statics/images/common/personal.png")
        },
        { title: "设置", url: require("statics/images/common/personal.png") }
      ]
    };
  }
  render() {
    return (
      <div className="profile-func">
        {this.state.menuArr.map((item, index) => {
          return <ProfileMenu title={item.title} url={item.url} key={index} />;
        })}
      </div>
    );
  }
}

export default ProfileFunc;
