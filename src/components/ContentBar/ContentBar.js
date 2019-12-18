import React, { Component } from "react";
import "./ContentBar.css";

class ContentBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="content-bar">
        <div>
          <img src={require("statics/images/common/return.png")} alt="" />
        </div>
        <div>
          <h2>{this.props.title}</h2>
        </div>
        <div>
          <img src={require("statics/images/common/search.png")} alt="" />
        </div>
      </div>
    );
  }
}

export default ContentBar;
