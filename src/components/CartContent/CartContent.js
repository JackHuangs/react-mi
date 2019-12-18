import React, { Component } from "react";
import Bscroll from "better-scroll";
import CartProduct from "./CartProduct";
import CartAccount from "./CartAccount";
import "./CartContent.css";

class CartContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartContentArr: [
        {
          title: "小米CC9 Pro",
          size: "8GB+256GB",
          color: "冰雪极光",
          price: 3499,
          url: require("statics/images/product/pro16.jpg"),
          num: 1
        },
        {
          title: "小米平板4 Plus 10英寸 LTE版",
          size: "4GB+64GB",
          color: "金色",
          price: 1899,
          url: require("statics/images/product/pro16.jpg"),
          num: 3
        }
      ]
    };
  }

  componentDidMount() {
    let wrapper = document.querySelector(".cart-content");
    new Bscroll(wrapper, {
      click: true
    });
  }

  render() {
    return (
      <div className="cart-content">
        <div>
          {this.state.cartContentArr.map((item, index) => {
            return (
              <CartProduct
                key={index}
                title={item.title}
                size={item.size}
                color={item.color}
                price={item.price}
                url={item.url}
                num={item.num}
              />
            );
          })}
          <CartAccount />
        </div>
      </div>
    );
  }
}

export default CartContent;
