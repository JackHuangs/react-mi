import React, { Component } from "react";

class ProductInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="product-both-side-info">
        <h3>{this.props.title}</h3>
        <p className="product-desc both-desc">{this.props.desc}</p>
        <p className="product-price">
          <span>
            ￥{this.props.price}
            <span style={{ fontSize: "12px", marginLeft: "2px" }}></span>
          </span>
          <span>{this.props.originalPrice}</span>
        </p>
      </div>
    );
  }
}

export default ProductInfo;
