import React, { Component } from "react";
import { Flex } from "antd-mobile";
import FullProduct from "components/FullProduct/FullProduct";
import Product from "components/Product/Product";
import ProductMore from "components/Product/ProductMore";
import "./HotProduct.css";

class HotProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HotProductArr: [
        {
          title: "Redmi Note 8 Pro",
          desc: "6400万全场景四摄",
          price: 1299,
          originalPrice: 1399,
          url: require("statics/images/product/pro5.jpg")
        },
        {
          title: "Redmi Note 8",
          desc: "千元4800万四摄",
          price: 999,
          originalPrice: "",
          url: require("statics/images/product/pro6.jpg")
        },
        {
          title: "小米9",
          desc: "全息幻彩机身，骁龙855",
          price: 2699,
          originalPrice: 3299,
          url: require("statics/images/product/pro7.jpg")
        },
        {
          title: "小米9 Pro 5G",
          desc: "5G双卡全网通，骁龙855Plus",
          price: 3699,
          originalPrice: "",
          url: require("statics/images/product/pro8.jpg")
        }
      ]
    };
  }
  render() {
    return (
      <div className="hot-product">
        <FullProduct url={require("statics/images/product/pro4.jpg")} />
        <Flex wrap="wrap" className="hot-product-list">
          {this.state.HotProductArr.map((item, index) => {
            return (
              <Product
                key={index}
                title={item.title}
                desc={item.desc}
                url={item.url}
                price={item.price}
                originalPrice={item.originalPrice}
              />
            );
          })}
        </Flex>
        <ProductMore name="更多小米手机产品" />
        <FullProduct url={require("statics/images/recommend/reco2.jpg")} />
      </div>
    );
  }
}

export default HotProduct;
