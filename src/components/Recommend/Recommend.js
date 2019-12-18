import React, { Component } from "react";
import FullProduct from "components/FullProduct/FullProduct";
import "./Recommend.css";

class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="recommend">
          <div>
            <img src={require("statics/images/product/pro1.jpg")} alt="" />
          </div>
          <div>
            <img src={require("statics/images/product/pro2.jpg")} alt="" />
            <img src={require("statics/images/product/pro3.jpg")} alt="" />
          </div>
        </div>
        <FullProduct url={require("statics/images/recommend/reco1.jpg")} />
      </div>
    );
  }
}

export default Recommend;
