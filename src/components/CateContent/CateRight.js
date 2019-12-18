import React, { Component } from "react";
import BScroll from "better-scroll";
import FullProduct from "components/FullProduct/FullProduct";
import CateRightTitle from "./CateRightTitle";
import CateRightList from "./CateRightList";

class CateRight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneProduct: [
        {
          title: "小米CC9 Pro",
          url: require("statics/images/product/pro14.png")
        },
        {
          title: "Redmi 8",
          url: require("statics/images/product/pro14.png")
        },
        {
          title: "Redmi 8A",
          url: require("statics/images/product/pro14.png")
        },
        {
          title: "小米9 Pro 5G",
          url: require("statics/images/product/pro14.png")
        },
        {
          title: "小米MIX Alpha",
          url: require("statics/images/product/pro14.png")
        },
        {
          title: "K20 Pro 尊享版",
          url: require("statics/images/product/pro14.png")
        },
        {
          title: "Redmi Note 8 Pro",
          url: require("statics/images/product/pro14.png")
        },
        {
          title: "Redmi Note 8",
          url: require("statics/images/product/pro14.png")
        },
        {
          title: "小米CC9",
          url: require("statics/images/product/pro14.png")
        }
      ],
      homeProduct: [
        {
          title: "小米CC9 Pro",
          url: require("statics/images/product/pro15.png")
        },
        {
          title: "Redmi 8",
          url: require("statics/images/product/pro15.png")
        },
        {
          title: "Redmi 8A",
          url: require("statics/images/product/pro15.png")
        },
        {
          title: "小米9 Pro 5G",
          url: require("statics/images/product/pro14.png")
        },
        {
          title: "小米MIX Alpha",
          url: require("statics/images/product/pro14.png")
        },
        {
          title: "K20 Pro 尊享版",
          url: require("statics/images/product/pro14.png")
        },
        {
          title: "Redmi Note 8 Pro",
          url: require("statics/images/product/pro14.png")
        },
        {
          title: "Redmi Note 8",
          url: require("statics/images/product/pro14.png")
        },
        {
          title: "小米CC9",
          url: require("statics/images/product/pro14.png")
        }
      ]
    };
  }

  componentDidMount() {
    const wrapper = document.querySelector(".cate-right");
    new BScroll(wrapper, {
      click: true
    });
  }

  render() {
    return (
      <div className="cate-right">
        <div className="cate-right-content">
          <FullProduct url={require("statics/images/product/pro13.jpg")} />
          <CateRightTitle title="手机" />
          <CateRightList cateProduct={this.state.phoneProduct} />
          <CateRightTitle title="家电" />
          <CateRightList cateProduct={this.state.homeProduct} />
        </div>
      </div>
    );
  }
}

export default CateRight;
