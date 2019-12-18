import React, { Component } from "react";

class CateRightProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="cate-right-product">
        <img src={this.props.url} alt="" />
        <p>{this.props.title}</p>
      </div>
    );
  }
}

export default CateRightProduct;
