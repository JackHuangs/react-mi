import React, { Component } from "react";
import { Flex } from "antd-mobile";
import { Link } from "react-router-dom";

class CartAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Flex className="cart-account">
        <div className="cart-account-total">
          <p>
            <span>666</span>元
          </p>
        </div>
        <div className="cart-account-return">
          <Link to="/cate">继续购物</Link>
        </div>
        <div className="cart-account-submit">去结算</div>
      </Flex>
    );
  }
}

export default CartAccount;
