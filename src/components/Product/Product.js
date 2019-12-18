import React, { Component } from "react";
import { Button } from "antd-mobile";
import "./Product.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="product">
        <img src={this.props.url} alt="" />
        <div className="product-info">
          <h3>{this.props.title}</h3>
          <p className="product-desc">{this.props.desc}</p>
          <p className="product-price">
            <span>
              ￥{this.props.price}
              <span style={{ fontSize: "12px", marginLeft: "2px" }}>起</span>
            </span>
            <span>{this.props.originalPrice}</span>
          </p>
          <div className="product-buy">
            <Button type="warning">立即购买</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
