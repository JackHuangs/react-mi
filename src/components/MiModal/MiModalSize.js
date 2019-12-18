import React, { Component } from "react";
import { Modal, Flex, Stepper } from "antd-mobile";
import MiModalTitle from "./MiModalTitle";
import MiButton from "components/MiButton/MiButton";
import "./MiModal.css";

class MiModalSize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productNum: 1,
      versionArr: [
        { id: 1, title: "6GB+128GB" },
        { id: 1, title: "8GB+128GB" },
        { id: 1, title: "8GB+256GB" }
      ],
      colorArr: [
        { id: 1, title: "魔法绿境" },
        { id: 1, title: "冰雪极光" },
        { id: 1, title: "暗夜魅影" }
      ],
      currentVersion: 0,
      currentColor: 0
    };
  }
  render() {
    return (
      <Modal
        popup
        visible={this.props.modalName}
        animationType="slide-up"
        className="mi-modal"
      >
        <MiModalTitle
          title={this.props.title}
          closeModal={this.props.closeModal}
        />
        <div className="size-content">
          <Flex className="size-title" align="start">
            <img
              src={require("statics/images/product/pro22.jpg")}
              alt=""
              style={{ width: "110px" }}
            />
            <div className="size-title-info">
              <p>
                ￥<span style={{ fontSize: "25px" }}>3499</span>
              </p>
              <p>小米CC9 Pro 8GB+256GB 魔法绿境</p>
            </div>
          </Flex>
          <div className="size-version">
            <p>版本</p>
            <ul>
              {this.state.versionArr.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={
                      this.state.currentVersion === index ? "active" : ""
                    }
                    onClick={this.selectVersion.bind(this, index)}
                  >
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="size-version">
            <p>颜色</p>
            <ul>
              {this.state.colorArr.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={
                      this.state.currentColor === index ? "active" : ""
                    }
                    onClick={this.selectColor.bind(this, index)}
                  >
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>
          <Flex className="size-num" justify="between">
            <div>购买数量</div>
            <Stepper
              showNumber
              min={1}
              value={this.state.productNum}
              onChange={this.changeNum.bind(this)}
            />
          </Flex>
        </div>
        <div className="mi-modal-footer">
          <MiButton value="加入购物车" miEvent={this.addCart} />
        </div>
      </Modal>
    );
  }

  selectVersion(index) {
    this.setState({
      currentVersion: index
    });
  }

  selectColor(index) {
    this.setState({
      currentColor: index
    });
  }

  changeNum(val) {
    this.setState({
      productNum: val
    });
  }

  addCart() {
    console.log("加入购物车");
  }
}

export default MiModalSize;
