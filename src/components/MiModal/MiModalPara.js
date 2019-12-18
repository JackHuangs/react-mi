import React, { Component } from "react";
import { Modal, Flex } from "antd-mobile";
import MiModalTitle from "./MiModalTitle";
import MiButton from "components/MiButton/MiButton";
import "./MiModal.css";

class MiModalPara extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paramterArr: [
        {
          name: "后置摄像头",
          content: "10800万+2000万+1200万+500万+200万像素"
        },
        { name: "前置摄像头", content: "3200万像素" },
        { name: "电池容量", content: "5260mAh" },
        { name: "电池充电", content: "30W闪充" },
        { name: "屏幕", content: "双曲面" },
        { name: "屏幕尺寸", content: "6.47尺寸" },
        { name: "屏幕分辨率", content: "2340x1080" },
        { name: "运行内存", content: "8GB" },
        { name: "存储容量", content: "256GB" },
        { name: "CPU", content: "骁龙730G" },
        { name: "CPU主频", content: "最高2.2GHz" },
        { name: "NFC", content: "支持" }
      ]
    };
    this.close = this.close.bind(this);
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
        <div className="parameter-content">
          {this.state.paramterArr.map((item, index) => {
            return (
              <Flex key={index} className="parameter-item">
                <div style={{ flex: 1 }}>{item.name}</div>
                <div style={{ flex: 2, color: "#000" }}>{item.content}</div>
              </Flex>
            );
          })}
        </div>
        <div className="mi-modal-footer">
          <MiButton value="完成" miEvent={this.close} />
        </div>
      </Modal>
    );
  }

  close() {
    this.props.closeModal();
  }
}

export default MiModalPara;
