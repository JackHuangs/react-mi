import React, { Component } from "react";
import TarBar from "components/TarBar/TarBar";

class TarBarBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tarBarArr: [
        {
          title: "首页",
          icon: require("statics/images/tarbar/home.png"),
          activeIcon: require("statics/images/tarbar/home-on.png"),
          url: "/"
        },
        {
          title: "分类",
          icon: require("statics/images/tarbar/cate.png"),
          activeIcon: require("statics/images/tarbar/cate-on.png"),
          url: "/cate"
        },
        {
          title: "购物车",
          icon: require("statics/images/tarbar/cart.png"),
          activeIcon: require("statics/images/tarbar/cart-on.png"),
          url: "/cart"
        },
        {
          title: "我的",
          icon: require("statics/images/tarbar/profile.png"),
          activeIcon: require("statics/images/tarbar/profile-on.png"),
          url: "/profile"
        }
      ]
    };
  }
  render() {
    return (
      <TarBar
        textColor="#bfbfbf"
        textOnColor="#ff6700"
        tarBarArr={this.state.tarBarArr}
      />
    );
  }
}

export default TarBarBox;
