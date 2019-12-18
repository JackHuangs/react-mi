import React, { Component } from "react";
import MiModalTitle from "./MiModalTitle";
import "./MiModal.css";
import { Modal, Flex } from "antd-mobile";
import MiButton from "components/MiButton/MiButton";

class MiModalAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addressArr: [
        { name: "黄俊坚", region: "广东", detail: "五邑大学校区" },
        {
          name: "黄俊坚",
          region: "广东",
          detail: "广东邮电职业技术学院快递点"
        },
        { name: "黄俊坚", region: "广东", detail: "周田镇人民政府" }
      ]
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
        <div className="address-content">
          {this.state.addressArr.map((item, index) => {
            return (
              <Flex key={index} className="address-content-item" align="start">
                <img
                  src={require("statics/images/common/address.png")}
                  alt=""
                  style={{
                    width: "20px",
                    marginRight: "10px",
                    marginTop: "2px"
                  }}
                />
                <div>
                  <p style={{ color: "#000" }}>
                    <span style={{ marginRight: "10px" }}>{item.name}</span>
                    <span>{item.region}</span>
                  </p>
                  <p>{item.detail}</p>
                </div>
              </Flex>
            );
          })}
        </div>
        <div className="mi-modal-footer">
          <MiButton value="选择新地址" miEvent={this.addAddress} />
        </div>
      </Modal>
    );
  }

  addAddress() {
    console.log("添加新地址");
  }
}

export default MiModalAddress;
