import React, { Component } from "react";
import CateLeft from "./CateLeft";
import CateRight from "./CateRight";
import "./CateContent.css";

class CateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="cate-content">
        <CateLeft />
        <CateRight />
      </div>
    );
  }
}

export default CateContent;
