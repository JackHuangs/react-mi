import React, { Component } from "react";
import "./DetailPto.css";

class DetailPto extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="detail-pto">
        <img src={require("statics/images/comment/pro4.webp")} alt="" />
        <img src={require("statics/images/comment/pro5.webp")} alt="" />
        <img src={require("statics/images/comment/pro6.webp")} alt="" />
      </div>
    );
  }
}

export default DetailPto;
