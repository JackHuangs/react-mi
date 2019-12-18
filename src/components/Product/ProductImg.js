import React, { Component } from "react";

class ProductImg extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="product-both-side-img">
        <img src={this.props.url} alt="" />
      </div>
    );
  }
}

export default ProductImg;
