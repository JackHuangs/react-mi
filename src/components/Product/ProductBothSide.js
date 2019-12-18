import React, { Component, Fragment } from "react";
import { Flex } from "antd-mobile";
import ProductImg from "./ProductImg";
import ProductInfo from "./ProductInfo";

class ProductBothSide extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let productBoth;
    if (this.props.index % 2 === 0) {
      productBoth = (
        <Fragment>
          <ProductImg url={this.props.url} />
          <ProductInfo
            title={this.props.title}
            desc={this.props.desc}
            price={this.props.price}
            originalPrice={this.props.originalPrice}
          />
        </Fragment>
      );
    } else {
      productBoth = (
        <Fragment>
          <ProductInfo
            title={this.props.title}
            desc={this.props.desc}
            price={this.props.price}
            originalPrice={this.props.originalPrice}
          />
          <ProductImg url={this.props.url} />
        </Fragment>
      );
    }
    return (
      <Flex className="product-both-side" align="start">
        {productBoth}
      </Flex>
    );
  }
}

export default ProductBothSide;
