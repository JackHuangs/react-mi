import React, { Component } from "react";
import CateRightProduct from "./CateRightProduct";
import { Flex } from "antd-mobile";

class CateRightList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Flex wrap="wrap" className="cate-right-list">
        {this.props.cateProduct.map((item, index) => {
          return (
            <CateRightProduct url={item.url} title={item.title} key={index} />
          );
        })}
      </Flex>
    );
  }
}

export default CateRightList;
