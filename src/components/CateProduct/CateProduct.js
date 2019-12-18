import React, { Component } from "react";
import { Flex } from "antd-mobile";
import ProductMore from "components/Product/ProductMore";
import FullProduct from "components/FullProduct/FullProduct";
import "./CateProcut.css";

class CateProdct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cateProdctArr: [
        { id: 1, url: require("statics/images/product/pro9.webp") },
        { id: 1, url: require("statics/images/product/pro10.webp") },
        { id: 1, url: require("statics/images/product/pro11.png") },
        { id: 1, url: require("statics/images/product/pro12.png") }
      ]
    };
  }
  render() {
    return (
      <div>
        <Flex wrap="wrap" className="cate-product">
          {this.state.cateProdctArr.map((item, index) => {
            return (
              <div key={index} className="cate-product-item">
                <img src={item.url} alt="" />
              </div>
            );
          })}
        </Flex>
        <FullProduct url={require("statics/images/recommend/reco3.jpg")} />
        <ProductMore name="了解小米" />
      </div>
    );
  }
}

export default CateProdct;
