import React, { Component } from "react";
import ContentBar from "components/ContentBar/ContentBar";
import CateContent from "components/CateContent/CateContent";
import App from "@/App";
import "./Cate.css";

class Cate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="cate-box">
        <ContentBar title="分类" />
        <CateContent />
        <App />
      </div>
    );
  }
}

export default Cate;
