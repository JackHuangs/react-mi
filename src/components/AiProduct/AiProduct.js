import React, { Component } from "react";
import FullProduct from "components/FullProduct/FullProduct";
import ProductBothSide from "components/Product/ProductBothSide";
import ProductMore from "components/Product/ProductMore";

class AiProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aiProductArr: [
        {
          name: "小爱音箱万能遥控版",
          desc: "传统家电秒变智能",
          price: 149,
          originalPrice: 199,
          url: require("statics/images/product/ai2.jpg"),
          type: "normal"
        },
        {
          name: "米家照片打印机",
          desc: "手机即拍即印",
          price: 499,
          originalPrice: "",
          url: require("statics/images/product/ai3.jpg"),
          type: "reverse"
        },
        {
          name: "小米净水器600G",
          desc: "600加仑大运量，即滤即饮无存水",
          price: 2499,
          originalPrice: "",
          url: require("statics/images/product/ai4.jpg"),
          type: "normal"
        }
      ]
    };
  }
  render() {
    return (
      <div className="ai-product">
        <FullProduct url={require("statics/images/product/ai1.jpg")} />
        <div>
          {this.state.aiProductArr.map((item, index) => {
            return (
              <ProductBothSide
                key={index}
                title={item.name}
                desc={item.desc}
                url={item.url}
                price={item.price}
                originalPrice={item.originalPrice}
                type={item.type}
                index={index}
              />
            );
          })}
        </div>
        <ProductMore name="更多米家智能产品" />
      </div>
    );
  }
}

export default AiProduct;
