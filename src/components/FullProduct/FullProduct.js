import React, { Component } from "react";
import "./FullProduct.css";

class FullProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="full-product">
        <img src={this.props.url} alt="" />
      </div>
    );
  }
}

export default FullProduct;
