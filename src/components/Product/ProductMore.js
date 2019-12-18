import React, { Component } from "react";
import "./Product.css";

class ProductMore extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="product-more">
        <p>{this.props.name}&nbsp;></p>
      </div>
    );
  }
}

export default ProductMore;
