import React, { Component } from "react";
import "./Detail.css";
import { Flex, Badge } from "antd-mobile";
import MiButton from "components/MiButton/MiButton";
import { Link } from "react-router-dom";

class DetailCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Flex className="detail-cart" justify="between">
        <Flex>
          <div className="detail-cart-item">
            <Link to="/">
              <img src={require("statics/images/tarbar/home.png")} alt="" />
              <p>首页</p>
            </Link>
          </div>
          <div className="detail-cart-item">
            <Link to="/cart">
              <Badge text={"3"}>
                <img src={require("statics/images/tarbar/cart.png")} alt="" />
              </Badge>
              <p>购物车</p>
            </Link>
          </div>
        </Flex>
        <MiButton value="加入购物车" miEvent={this.addCart} />
      </Flex>
    );
  }

  addCart() {
    console.log("加入购物车");
  }
}

export default DetailCart;
