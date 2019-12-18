import React, { Component } from "react";
import { Checkbox, Stepper } from "antd-mobile";

class CartProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="cart-product">
        <div>
          <Checkbox />
        </div>
        <div className="cart-product-pto">
          <img src={this.props.url} alt="" />
        </div>
        <div>
          <p className="cart-product-title">
            <span>{this.props.title}</span>
            <span>{this.props.size}</span>
            <span>{this.props.color}</span>
          </p>
          <p className="cart-product-price">售价：{this.props.price}元</p>
          <div className="cart-product-num">
            <Stepper value={this.props.num} showNumber min={1} />
            <img src={require("statics/images/common/del.png")} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default CartProduct;
