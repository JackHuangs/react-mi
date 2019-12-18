import React, { Component } from "react";
import { Flex } from "antd-mobile";
import "./DetailComment.css";

class DetailComment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="detail-comment">
        <Flex justify="between">
          <Flex className="detail-comment-pto">
            <img src={require("statics/images/comment/pto.jpg")} alt="" />
            <div>
              <p>叶波</p>
              <p style={{ color: "#8a8a8a" }}>2019-11-18</p>
            </div>
          </Flex>
          <Flex>
            <img
              src={require("statics/images/common/like.png")}
              alt=""
              style={{ width: "25px", marginRight: "5px" }}
            />
            <p style={{ color: "#8a8a8a" }}>77</p>
          </Flex>
        </Flex>
        <div className="detail-comment-content">为小米点赞！为家乡加油！</div>
        <Flex className="detail-comment-img">
          <div>
            <img src={require("statics/images/comment/pro1.jpg")} alt="" />
          </div>
          <div>
            <img src={require("statics/images/comment/pro2.jpg")} alt="" />
          </div>
          <div>
            <img src={require("statics/images/comment/pro3.jpg")} alt="" />
          </div>
        </Flex>
      </div>
    );
  }
}

export default DetailComment;
