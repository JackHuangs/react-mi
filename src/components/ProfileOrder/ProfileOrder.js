import React, { Component } from "react";
import { Flex } from "antd-mobile";
import "./ProfileOrder.css";

class ProfileOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="profile-order">
        <Flex className="profile-order-title" justify="between">
          <div>我的订单</div>
          <Flex className="profile-order-more">
            <p>全部订单</p>
            <img
              src={require("statics/images/common/right-arrow.png")}
              alt=""
            />
          </Flex>
        </Flex>

        <Flex className="profile-order-type">
          <div>
            <img src={require("statics/images/common/payment.png")} alt="" />
            <p>待付款</p>
          </div>

          <div>
            <img src={require("statics/images/common/receive.png")} alt="" />
            <p>待收货</p>
          </div>

          <div>
            <img src={require("statics/images/common/service.png")} alt="" />
            <p>退换修</p>
          </div>
        </Flex>
      </div>
    );
  }
}

export default ProfileOrder;
