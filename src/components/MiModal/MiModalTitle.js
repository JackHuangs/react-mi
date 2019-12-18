import React, { Component } from "react";
import { Flex } from "antd-mobile";

class MiModalTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.close = this.close.bind(this);
  }
  render() {
    return (
      <Flex align="center" justify="between" className="mi-modal-header">
        <div className="modal-title">{this.props.title}</div>
        <div className="modal-close" onClick={this.close}>
          <img src={require("statics/images/common/close.png")} alt="" />
        </div>
      </Flex>
    );
  }

  close() {
    this.props.closeModal();
  }
}

export default MiModalTitle;
