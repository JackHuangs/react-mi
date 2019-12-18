import React, { Component } from "react";

class CateRightTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="cate-right-title">
        <span>{this.props.title}</span>
      </div>
    );
  }
}

export default CateRightTitle;
